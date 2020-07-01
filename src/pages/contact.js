import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via
        <Link to="https://twitter.com/KelvinMutuota"> @KelvinMutuota </Link>
        on twitter.
      </p>
    </Layout>
  )
}

export default ContactPage
