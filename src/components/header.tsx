import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import twitter from "../../static/images/twitter_outline.svg"
import github from "../../static/images/github_outline.svg"

export interface ISitePath {
  sitePath: string
}

const Header: React.FC<ISitePath> = ({ sitePath }) => (
  <header className={styles.header}>
    <div className={styles.layout}>
      {sitePath === `/` ? (
        <h1 className={styles.title}>
          <Link to="/">Yamablog</Link>
        </h1>
      ) : (
        <div className={styles.title}>
          <Link to="/">Yamablog</Link>
        </div>
      )}
      <div>
        <a
          className={styles.icon}
          href="https://twitter.com/yamachoo567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter-logo" />
        </a>
        <a
          className={styles.icon}
          href="https://github.com/yamachoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github-logo" />
        </a>
      </div>
    </div>
  </header>
)

export default Header
