import React from "react"
import { PageProps } from "gatsby"
import Error404Layout from "../components/404Layout"
import SEO from "../components/seo"

const Error404Page: React.FC<PageProps> = ({ path }) => {
  return (
    <Error404Layout sitePath={path}>
      <SEO title="404" />
      <div className="article__title">
        <h1>404 Not Found</h1>
      </div>
      <div className="article__content">
        <p>
          お探しのページは見つかりませんでした。
          <br />
          一時的にアクセスできない状態か、移動もしくは削除された可能性があります。
        </p>
      </div>
    </Error404Layout>
  )
}

export default Error404Page
