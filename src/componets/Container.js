import React, { useEffect } from "react"
import Section from "./Section"
import '../styles/container.css'

function Container() {
  return (
    <div className="box">
      <Section 
        vehicle="Sedan"
        bgColor="hsl(31, 77%, 52%)"
      />
      <Section 
        vehicle="SUVs"
        bgColor="hsl(184, 100%, 22%)"
        />
      <Section 
        vehicle="Luxary"
        bgColor="hsl(179, 100%, 13%)"
      />
    </div>
  )
}

export default Container