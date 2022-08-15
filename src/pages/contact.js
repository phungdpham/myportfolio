import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contact"></Title>
        <article className={styles.text}>
          <p>
            Please send me an email at{" "}
            <a href="mailto:phung.contact@gmail.com?Subject=Hello%20" target="_top">phung.contact@gmail.com</a>
          </p>
          <p>
            You can also reach me on Linkedin at <a href="https://www.linkedin.com/in/phungdpham/">@phungdpham</a>.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default contact
