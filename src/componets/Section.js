import React, { useEffect } from "react"
import '../styles/section.css'
function Section(props) {
  return (
    <section 
      className="section section--outer"
      style={{'backgroundColor': `${props.bgColor}`}}
      >
      {props.vechicle}
    </section>
  )
}

export default Section