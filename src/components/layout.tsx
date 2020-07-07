/** @jsx jsx */
import React from "react"
import { Fragment } from "react"
import { css, jsx } from "@emotion/core"
import Header from "./header"
import "../../static/styles/global.css"

const style = css({
  margin: `0 auto`,
  maxWidth: 800
})

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div css={style}>{children}</div>
    </Fragment>
  )
}

export default Layout
