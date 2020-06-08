import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

import { Seo, CodeBlock, ReadingProgress } from "../components"

const Container = styled.article`
  width: 100%;
  display: grid;
  grid-template-areas:
    "cover cover   cover"
    ".     content .    "
    ".     .       .    ";
  grid-template-columns: var(--space-m) minmax(0, 1fr) var(--space-m);
  row-gap: var(--space-s);
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-areas:
      ". .       ."
      ". cover   ."
      ". content ."
      ". .       .";
    row-gap: var(--space-m);
  }
`

const CoverImageContainer = styled.div`
  grid-area: cover;
  justify-self: center;
  width: 100%;
  max-width: 800px;
`

const CoverImage = styled(Image)`
  width: 100%;
  height: 0;
  padding-bottom: 60%;

  @media (min-width: 800px) {
    border-radius: 4px;
  }
`

const Title = styled.h1`
  font-size: 3.2rem;
  /* font-size: 5.6rem; */
`

const Meta = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--dark-grey);
`

const Divider = styled.span`
  background: #f1f1f1;
  padding-bottom: 1px;
  margin: 0 var(--space-xs) 1px;
  flex: 1;
`

const Content = styled.section`
  grid-area: content;
  justify-self: center;
  width: 100%;
  max-width: 700px;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--space-s);

  @media (min-width: 800px) {
    position: relative;
    top: calc(-1 * (var(--space-m) + var(--space-l)));
    padding: var(--space-m) var(--space-l);
    background: var(--white);
    border-radius: 4px;
    border: 1px solid var(--light-grey);
  }
`

const components = {
  h2: styled.h2`
    font-size: 2.4rem;
  `,

  p: styled.p`
    font-size: 1.8rem;
    line-height: 2.8rem;
    word-break: break-word;

    figcaption {
      text-align: center;
      font-size: 1.6rem;
      margin-top: 4px;
      color: var(--dark-grey);
    }
  `,

  a: styled.a`
    color: var(--orange);
  `,

  ul: styled.ul`
    list-style-position: inside;
  `,

  li: styled.li`
    font-size: 1.8rem;
    line-height: 3.2rem;

    p {
      display: inline;
    }
  `,
  code: CodeBlock
}

export default function BlogPost({ data: { mdx } }) {
  const contentRef = useRef<HTMLElement>(null)

  return (
    <Container ref={contentRef}>
      <Seo title={mdx.frontmatter.title} description={mdx.excerpt} />

      <ReadingProgress target={contentRef} />

      <CoverImageContainer>
        <CoverImage
          fluid={mdx.frontmatter.coverImage.childImageSharp.fluid}
          alt={mdx.frontmatter.coverImageAlt}
        />
      </CoverImageContainer>

      <Content>
        <Title>{mdx.frontmatter.title}</Title>

        <Meta>
          <p>{mdx.frontmatter.date}</p>
          <Divider />
          <p>{mdx.timeToRead} Minute Read</p>
        </Meta>

        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Content>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 160)
      timeToRead
      frontmatter {
        title
        date(formatString: "Do MMM YYYY")
        coverImage {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coverImageAlt
      }
    }
  }
`
