import React from "react"
import styled from "styled-components"


const Name = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h4>
        <span className="main">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  text-transform:uppercase;
  font-size:1.5rem;
  align-items:center;
  justify-content:center;
  h4{
    margin: auto 0;
    letter-spacing:5px;
    color:var(--mainYellow);
  }
  .main{
    color:var(--primaryColor);
    margin-right: 7px;
  }

`

export default Name
