import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { IndexQuery } from "../../types/graphql-types"

interface IProps {
  data: IndexQuery
}

const IndexPage: React.FC<IProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.site?.siteMetadata?.title || `HOME`} />
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
