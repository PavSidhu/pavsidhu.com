import React, { ReactNode } from "react"
import { createGlobalStyle } from "styled-components"

import CircularBold from "../fonts/circular-bold.otf"
import CircularBook from "../fonts/circular-book.otf"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "circular-book";
  }

  h3 {
    -webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  }

  html, body {
    font-size: 62.5%;
    background: #fefefe;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  @font-face {
    font-family: "circular-bold";
    src: url('${CircularBold}') format("opentype");
  }

  @font-face {
    font-family: "circular-book";
    src: url('${CircularBook}') format("opentype");
  }
`

interface Props {
  children: ReactNode
}

export default function Layout(props: Props) {
  return (
    <>
      <GlobalStyle />
      <main>{props.children}</main>
    </>
  )
}
