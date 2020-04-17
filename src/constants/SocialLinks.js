import React from "react"
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa"

export default [

  {
    id: Math.random(),
    url: "https://github.com/phungdpham?tab=repositories",
    image: <FaGithubSquare className="github-icon icon" />,
  },
  {
    id: Math.random(),
    url: "https://www.linkedin.com/in/phungdpham/",
    image: <FaLinkedin className="linkedin-icon icon" />,
  },
]
