import React, { useEffect } from "react"
import Section from "./Section"
import '../styles/container.css'

function Container() {
  return (
    <div className="box">
      <Section vechicle="Sedan"/>
      <Section vechicle="SUVs"/>
      <Section vechicle="Luxary"/>
    </div>
  )
}

export default Container