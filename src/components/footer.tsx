import React from "react"
import style from "./footer.module.css"

const Footer: React.FC = () => (
  <footer className={style.footer}>
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
  </footer>
)

export default Footer
