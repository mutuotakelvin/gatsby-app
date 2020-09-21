import React from "react"
import styled from "styled-components"
import cardStyles from "./card.module.scss"

const Title = styled.h2`
  color: #d975f0;
  font-weight: 300;
`
// color: #738584;

const Description = styled.p`
  color:#e6eded
  font-weight: 300;
`
// const Div = styled.div`
//   // background: #4d183f;
//   border: 0px solid #9a9b9c;
//   display: flex;
//   margin: 30px 0px 30px 0px;
// `
const Card = ({ title, where, from, to }) => (
  <div
    className={(cardStyles.card, cardStyles.card)}
    // style={{ color: "#fff", backgroundColor: "black" }}
  >
    <h3>{title}</h3>
    <h4>{where}</h4>
    <h4>{to}</h4>
  </div>
)
export default Card

{
  /* <Title>Hello! I'am Kelvin Mutuota.</Title>
    <Div>
      <Description>
        I am a full-stack Developer.I like dabbling in various parts of frontend
        development and like to learn about new technologies, write technical
        articles or simply play games in my free time.
      </Description>
    </Div> */
}
