/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

const style = css({
  margin: `0 auto`,
  maxWidth: 800
})

const Layout: React.FC = ({ children }) => {
  return <div css={style}>{children}</div>
}

export default Layout
