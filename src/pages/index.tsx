import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { IndexQuery } from "../../types/graphql-types"

interface IProps {
  data: IndexQuery
}

const IndexPage: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <h1>{data.site?.siteMetadata?.title}</h1>
      <div>Hello world!</div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query Index {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
