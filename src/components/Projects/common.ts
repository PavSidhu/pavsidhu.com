import styled from "styled-components"

import { size } from "../../styles"

const WebContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  justify-items: center;
  max-width: 1600px;
  width: 100%;
  padding: 0 24px;

  @media (min-width: ${size.medium}) {
    flex: 1;
    grid-template-columns: minmax(400px, 1fr) 2fr;
    grid-gap: 80px;
    padding: 0;
  }
`

const MobileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  justify-items: center;
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;

  @media (min-width: ${size.medium}) {
    flex: 1;
    grid-template-columns: minmax(400px, 1fr) 1fr;
    grid-gap: 80px;
  }
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 350px;
  justify-content: center;

  @media (min-width: ${size.medium}) {
    justify-self: end;
  }
`

const Name = styled.h2`
  font-size: 5.6rem;
  color: #fefefe;
  margin-bottom: 16px;
`

const Description = styled.h3`
  font-size: 2.4rem;
  color: #fefefe;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #fefefe;
  margin-bottom: 16px;
`

export { WebContainer, MobileContainer, Text, Name, Description, Paragraph }