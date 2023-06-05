import React, { useEffect } from "react"
import '../styles/section.css'
function Section(props) {
  return (
    <section 
      className="section section--outer"
      style={{'backgroundColor': `${props.bgColor}`}}
      >
        style={{color: `${props.bgColor}`}}
    </section>
  )
}

export default Section