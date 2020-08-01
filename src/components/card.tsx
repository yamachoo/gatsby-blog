import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"
import styles from "./card.module.scss"

export interface INode {
  node: {
    id: string
    frontmatter: {
      title: string
      created: string
      updated: string
      path: string
      description: string
      visual: {
        childImageSharp: IFluid
      }
    }
  }
}

export interface IFluid {
  fluid: FluidObject
}

const Card: React.FC<INode> = ({ node }) => (
  <div className={styles.card}>
    <Link to={node.frontmatter.path}>
      <Img fluid={node.frontmatter.visual.childImageSharp.fluid} />
      <div className={styles.body}>
        <p>{node.frontmatter.created}</p>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.frontmatter.description}</p>
      </div>
    </Link>
  </div>
)

export default Card
