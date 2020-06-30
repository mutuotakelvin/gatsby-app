import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Page</h1>
      <h2>I'am a fullstack developer passionate about new technologies.</h2>
      <Link to="/contact">Want to work with me? Reach out!</Link>
    </Layout>
  )
}

export default AboutPage
