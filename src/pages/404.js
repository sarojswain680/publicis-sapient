import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>OOPS</h1>
    <p>404 - THE PAGE CAN'T BE FOUND</p>
  </Layout>
)

export default NotFoundPage
