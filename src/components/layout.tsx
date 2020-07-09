import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import "../../static/styles/global.scss"

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
