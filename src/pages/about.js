import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am Phung and I specialize in React Web Development.</p>
          <p>Started working on coding projects since 2018 </p>

          <p>
            Having taking a coding bootcampt at Unversity of Central Florida
            (UCF). View 
            <a
              href="https://credly.com/credit/15307068"
              target="_blank"
              style={{ color: "var(--primaryColor" }}
            >
              My Certificte
            </a>
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default about
