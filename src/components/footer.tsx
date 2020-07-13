import React from "react"
import { Link } from "gatsby"
import styles from "./footer.module.scss"

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <p>
      © {new Date().getFullYear()} Yamabolg, built with{` `}
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </p>
    <p>
      created by{` `}
      <a
        href="https://twitter.com/yamachoo567"
        target="_blank"
        rel="noopener noreferrer"
      >
        @yamachoo
      </a>
    </p>
    <p>
      <Link to="/privacy">Privacy policy</Link>
    </p>
  </footer>
)

export default Footer
