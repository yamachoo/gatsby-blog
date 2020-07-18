import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"
import twitter from "../assets/images/twitter_outline.svg"
import github from "../assets/images/github_outline.svg"

export interface ISitePath {
  sitePath: string
}

const Header: React.FC<ISitePath> = ({ sitePath }) => {
  const socials = [
    {
      name: `twitter`,
      href: `https://twitter.com/yamachoo567`,
      src: twitter,
      alt: `twitter-logo`
    },
    {
      name: `github`,
      href: `https://github.com/yamachoo`,
      src: github,
      alt: `github-logo`
    }
  ]

  return (
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
        <ul className={styles.socials}>
          {socials.map((social) => (
            <li key={social.name}>
              <a
                className={styles.link}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.icon}
                  src={social.src}
                  alt={social.alt}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
