import React from "react"
import Project from "./Project"
import data from "../../constants/Projects"
import styles from "../../css/projects.module.css"
import Title from "../Title"

const Projects = () => {
  console.log(data)
  return (
    <section className={styles.projects}>
      <Title title="all" subtitle="projects" />
      <div className={styles.center}>
        {data.map(item => {
          return (
            <Project
              key={item.id}
              image={item.img}
              title={item.title}
              url={item.url}
              description={item.description}
            ></Project>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
