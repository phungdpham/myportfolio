import React from "react"
import styles from "../css/footer.module.css"
import icons from "../constants/SocialLinks"
import Name from "./Name"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Name title="Phung" subtitle="Pham" />
      </div>
      <div className={styles.icons}>
        {icons.map(item => {
          return (
            <a key={item.id} href={item.url} className={styles.icon}>
              {item.image}
            </a>
          )
        })}
      </div>
      <div className={styles.info}>
        © {new Date().getFullYear()} Phung Pham. All rights reserved. Built
        with
        <a href="https://www.gatsbyjs.org/" className={styles.link}>
          Gatsby
        </a>
      </div>
    </footer>
  )
}

export default Footer
