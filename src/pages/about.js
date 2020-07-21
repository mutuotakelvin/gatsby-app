import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"
import ProgressBar from "../components/skill"

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`
const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 80 },
  { bgcolor: "#ef6c00", completed: 53 },
]

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About Page</h1>
        <h2>I'am a fullstack developer passionate about new technologies.</h2>

        <h1>Currently a student in Machakos University </h1>
      </div>
      <div>
        <p>
          Studying computer science<span role="img">👌</span>
        </p>
      </div>
      <div>
        <div>JavaScript | HTML | CSS</div>
        <div className="App">
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
            />
          ))}
        </div>
      </div>
      <StyledLink to="/contact">Want to work with me? Reach out!</StyledLink>
    </Layout>
  )
}

export default AboutPage
