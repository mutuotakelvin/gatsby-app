import React from "react"
import styled from "styled-components"

const Title = styled.h2`
  color: #d975f0;
  font-weight: 300;
`
const Description = styled.p`
  color: #738584;
  font-weight: 300;
`
const Card = props => (
  <div style={{ color: "#fff" }}>
    <Title>
      Hello! I'am Kelvin Mutuota, a full-stack developer living in Nakuru.
    </Title>
    <Description>
      I am a full-stack Developer.I like dabbling in various parts of frontend
      development and like to learn about new technologies, write technical
      articles or simply play games in my free time.
    </Description>
  </div>
)
export default Card
