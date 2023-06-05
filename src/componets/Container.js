import React, { useEffect } from "react"
import Section from "./Section"
import '../styles/container.css'

function Container() {
  return (
    <div className="box">
      <Section 
        vechicle="Sedan"
        bgColor="hsl(31, 77%, 52%)"
      />
      <Section 
        vechicle="SUVs"
        bgColor="hsl(184, 100%, 22%)"
        />
      <Section 
        vechicle="Luxary"
        bgColor="hsl(179, 100%, 13%)"
      />
    </div>
  )
}

export default Container