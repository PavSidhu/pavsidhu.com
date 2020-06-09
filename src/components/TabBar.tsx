import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as BlogIcon } from "../images/icons/blog.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"

const Container = styled.nav`
  display: flex;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  background: var(--white);
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 10;

  @media (min-width: 800px) {
    display: none;
  }
`

const Tab = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  fill: currentColor;
  padding: calc(0.8rem + 2px) 0 0.8rem;
  background: var(--white);
  border-bottom: 2px solid var(--white);
  transition: background 100ms, color 100ms;

  &.active {
    background: var(--light-orange);
    color: var(--orange);
    border-bottom: 2px solid var(--orange);
  }
`

const TabLabel = styled.p`
  margin-top: 4px;
  font-size: var(--font-xxs);
`

export default function TabBar() {
  return (
    <Container>
      <Tab to="/" activeClassName="active">
        <HomeIcon aria-hidden="true" />
        <TabLabel>Home</TabLabel>
      </Tab>

      <Tab to="/about" activeClassName="active" partiallyActive={true}>
        <AboutIcon aria-hidden="true" />
        <TabLabel>About</TabLabel>
      </Tab>

      <Tab to="/blog" activeClassName="active" partiallyActive={true}>
        <BlogIcon aria-hidden="true" />
        <TabLabel>Blog</TabLabel>
      </Tab>

      <Tab to="/projects" activeClassName="active" partiallyActive={true}>
        <ProjectsIcon aria-hidden="true" />
        <TabLabel>Projects</TabLabel>
      </Tab>

      <Tab to="/contact" activeClassName="active" partiallyActive={true}>
        <ContactIcon aria-hidden="true" />
        <TabLabel>Contact</TabLabel>
      </Tab>
    </Container>
  )
}
