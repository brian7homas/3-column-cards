import React, { useEffect } from "react"
import gsap from 'gsap'
import '../styles/section.css'
function Section(props) {
  let tl
  const checkDevice = ()=> {
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {
      loadAnimation(true)
      } else{
        return loadAnimation(false)
      }
    
  }
  const loadAnimation = (a)=> {
    if(a){
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
      .to(`.section--click-${props.vehicle}`,
        {
          bottom: '-.9em',
          scale: '1.5',
          onComplete: () => {
            tl.invalidate()
          }
        }, '<')
    }else {
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
    
    }
  }
  
  useEffect(() => {
    checkDevice()
  }, [])
  return (
    <section 
      className="section"
      style={{'backgroundColor': `${props.bgColor}`}}
      >
      <header>
        <div>{props.icon}</div>
        <h1 className="section--vehicle">{props.vehicle}</h1>
      </header>
      <main>
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
      </main>
    </section>
  )
}

export default Section