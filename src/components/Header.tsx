import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { ReactComponent as HomeIcon } from "../images/icons/home.svg"
import { ReactComponent as AboutIcon } from "../images/icons/about.svg"
import { ReactComponent as ProjectsIcon } from "../images/icons/projects.svg"
import { ReactComponent as ContactIcon } from "../images/icons/contact.svg"

const Container = styled.header`
  display: none;

  @media (min-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10;
    padding: var(--space-s) var(--space-l);
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
    background: var(--white);
  }
`

const Title = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  padding-top: var(--font-padding);
`

const Nav = styled.nav`
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--space-s);
`

const NavItem = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  padding: var(--space-xs) var(--space-s);
  background: var(--white);
  border-radius: 20px;
  fill: currentColor;
  transition: background 100ms, color 100ms;

  &.active {
    background: var(--light-orange);
    color: var(--orange);
  }

  @media (hover: hover) {
    &:hover:not(.active) {
      background: var(--light-grey);
    }
  }
`

const NavItemLabel = styled.p`
  margin-left: var(--space-xs);
  font-size: 1.4rem;
`

export default function Header() {
  return (
    <Container>
      <Title to="/">Pav Sidhu</Title>

      <Nav>
        <NavItem to="/" activeClassName="active" partiallyActive={true}>
          <HomeIcon aria-hidden="true" />
          <NavItemLabel>Home</NavItemLabel>
        </NavItem>

        <NavItem to="/about" activeClassName="active" partiallyActive={true}>
          <AboutIcon aria-hidden="true" />
          <NavItemLabel>About</NavItemLabel>
        </NavItem>

        <NavItem to="/projects" activeClassName="active" partiallyActive={true}>
          <ProjectsIcon aria-hidden="true" />
          <NavItemLabel>Projects</NavItemLabel>
        </NavItem>

        <NavItem to="/contact" activeClassName="active" partiallyActive={true}>
          <ContactIcon aria-hidden="true" />
          <NavItemLabel>Contact</NavItemLabel>
        </NavItem>
      </Nav>
    </Container>
  )
}
