import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

const Error404Page: React.FC<PageProps> = () => {
  return (
    <Layout>
      <h1>You are here!</h1>
      <h2>But nothing found for you #404</h2>
    </Layout>
  )
}

export default Error404Page
