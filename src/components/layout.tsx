import React from "react"
import style from "./layout.module.css"
import Header from "./header"
import Footer from "./footer"
import "../../static/styles/global.css"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={style.layout}>
      <Header />
      <div className={style.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
