import React from "react"
import styles from "../../css/single-project.module.css"
import { Link } from "gatsby"
import { FaGithub } from "react-icons/fa"

const Project = ({ title, description, url, image, github }) => {
  return (
    <article className={styles.project}>
      <div className={styles.imgContainer}>
        {/* <Image fluid={image} alt={title} className={styles.img}></Image> */}
        <img src={image} alt={title} className={styles.img}></img>
        <a
          href={url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferer"
        >
          View Demo
        </a>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferer"
        >
          <FaGithub size="3rem" />
        </a>
      </div>
    </article>
  )
}

export default Project
