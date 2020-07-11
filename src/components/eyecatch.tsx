import React from "react"
import Img from "gatsby-image"
import { FluidObject } from "gatsby-image"
import styles from "./eyecatch.module.scss"

export interface IFluid {
  fluid: FluidObject
}

const Eyecatch: React.FC<IFluid> = ({ fluid }) => (
  <Img className={styles.eyecatch} fluid={fluid} />
)

export default Eyecatch
