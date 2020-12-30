import React from "react"
import styles from "./404Layout.module.scss"
import Header from "./header"
import { ISitePath } from "./header"
import Main from "./main"
import Footer from "./footer"

const Error404Layout: React.FC<ISitePath> = ({ children, sitePath }) => {
  return (
    <div className={styles.layout}>
      <Header sitePath={sitePath} />
      <div className={styles.content}>
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  )
}

export default Error404Layout
