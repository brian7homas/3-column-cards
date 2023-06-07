import React, { useEffect } from "react"
import gsap from 'gsap'
import '../styles/section.css'
function Section(props) {
  let tl
  useEffect(() => {
    tl = gsap.timeline({ paused: true })
      .to(`.section--hover-${props.vehicle.toLowerCase()}`,
        {
          top: '0em',
          scale: 2,
          height: '100%',
          minWidth: '100%'
        })
      .to(`.section--text-${props.vehicle}`, {
        color: 'hsl(0, 0%, 95%)'
      }, '<')
      .addPause()
      .to(`.section--click-${props.vehicle}`,
        {
          bottom: '-.9em',
          scale: '1.5',
          onComplete: () => {
            tl.invalidate()
          }
        })
  }, [])
  return (
    <section 
      className="section section--outer"
      style={{'backgroundColor': `${props.bgColor}`}}
      >
      <div>{props.icon}</div>
      <h1 className="section--vehicle">{props.vehicle}</h1>
      <p className="section--copy">{props.copy}</p>
      <button 
        onMouseEnter={() => tl.play()}
        onMouseLeave={() => tl.reverse()}
        onClick={() => tl.play()}
        className={`section--button section--button-${props.vehicle.toLowerCase()}`}
        style={{color: `${props.bgColor}`}}
      >
      <div className={`section--text section--text-${props.vehicle}`}>Learn More</div>
      <div className={`section--hover section--hover-${props.vehicle.toLowerCase()}`} style={{'backgroundColor': `${props.hover}`}}></div>
      <div className={`section--click section--click-${props.vehicle}`}>{props.btnIcon}</div>
      </button>
    </section>
  )
}

export default Section