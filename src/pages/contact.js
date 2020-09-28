import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <div className={contactStyles.condiv}>
        <Head title="Contact" />
        <h1>Contact</h1>
        <h1 className="subtopic">Contact Me</h1>
        <h3>Email : kelvinmutuota749@gmail.com</h3>
        <h3>Instagram : @kelvin_mutuota</h3>
        <h3> Phone : 0712704936</h3>
      </div>
      <p>
        The best way to reach me is via
        <Link to="https://twitter.com/KelvinMutuota"> @KelvinMutuota </Link>
        on twitter.
      </p>
    </Layout>
  )
}

export default ContactPage
