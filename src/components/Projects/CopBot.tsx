import React from "react"
import styled from "styled-components"

import preview from "../../images/copbot/preview.png"
import { size } from "../../styles"
import {
  Description,
  Name,
  Paragraph,
  Text,
  WebContainer as Container
} from "./common"

const Button = styled.a`
  padding: 16px;
  font-size: 1.6rem;
  color: #fefefe;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
`

const Photo = styled.img`
  align-self: center;
  width: 100%;
  max-width: 600px;

  @media (min-width: ${size.medium}) {
    max-width: none;
  }
`

function CopBot({ project }) {
  return (
    <Container>
      <Text>
        <Name>{project.name}</Name>
        <Description>{project.description}</Description>

        {project.fullDescription.map((paragraph: string, index: number) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}

        <Button href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      </Text>

      <Photo src={preview} />
    </Container>
  )
}

export default CopBot
