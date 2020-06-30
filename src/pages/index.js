import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'am Kelvin Mutuota, a full-stack developer living in Nakuru.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me!</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
