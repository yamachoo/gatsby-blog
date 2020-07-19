import React from "react"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Error404Page: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout sitePath={path}>
      <SEO title="404" />
      <div className="article__title">
        <h1>404 Not Found</h1>
      </div>
      <div className="article__content">
        <p>
          お探しのページは見つかりませんでした。<br />
          一時的にアクセスできない状態か、移動もしくは削除された可能性があります。
        </p>
      </div>
    </Layout>
  )
}

export default Error404Page
