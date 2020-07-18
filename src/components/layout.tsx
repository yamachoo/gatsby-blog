import React from "react"
import styles from "./layout.module.scss"
import Header from "./header"
import { ISitePath } from "./header"
import Main from "./main"
import AdSense from "./adSense"
import Footer from "./footer"

const Layout: React.FC<ISitePath> = ({ children, sitePath }) => {
  return (
    <div className={styles.layout}>
      <Header sitePath={sitePath} />
      <div className={styles.content}>
        <Main>{children}</Main>
        <AdSense className={styles.adsense} />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
