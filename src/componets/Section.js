import React, { useEffect } from "react"
import '../styles/section.css'
function Section(props) {
  return (
    <section 
      className="section section--outer"
      style={{'backgroundColor': `${props.bgColor}`}}
      >
      <div>{props.icon}</div>
      <h1 className="section--vehicle">{props.vehicle}</h1>
      <p className="section--copy">{props.copy}</p>
      <button 
        className="section--button"
        style={{color: `${props.bgColor}`}}
      >Learn More</button>
    </section>
  )
}

export default Section