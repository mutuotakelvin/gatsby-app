import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Card from "../components/card"

import Layout from "../components/layout"
import Head from "../components/head"

import aboutStyles from "./about.module.scss"

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`
// Date.absolute()
const yr = Date.now()

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About Me</h1>
        <p>{yr}</p>
      </div>
      <div>
        <Card title="I started my journey in the world of computers in 2019, now I’m 21 years old, Pursuing my Computer Science Degree in Machakos University Kenya. Web development is my center of interest, I always love the idea of cross-platform development, 1-n one code base deploy into almost any platform, which web technology like Javascript enables me to do." />
        <h1>Education</h1>
        <div className={aboutStyles.condiv}>
          <Card
            title="Bachelor of Science(Computer Science)"
            where="Machakos University"
            from="Sept 2019"
            to="Present"
          />
          <Card
            title="HSC"
            where="LangLang Secondary School"
            from="2015"
            to="2018"
          />
        </div>
      </div>

      <StyledLink to="/contact">Want to work with me? Reach out!</StyledLink>
    </Layout>
  )
}

export default AboutPage
