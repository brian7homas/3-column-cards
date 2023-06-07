import React, { useEffect } from "react"
import Section from "./Section"
import '../styles/container.css'

function Container() {
  return (
    <div className="box">
      <Section 
        icon={
          <svg width="64" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#000" opacity=".201" cx="20" cy="20" r="20" />
              <path d="M52.936 24.11c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm-21.957 0c1.942 0 3.517 1.542 3.517 3.445 0 1.903-1.575 3.445-3.517 3.445s-3.516-1.542-3.516-3.445c0-1.903 1.574-3.445 3.516-3.445zm6.948-4.848v1.429c0 .716.61 1.293 1.348 1.259a1.295 1.295 0 001.225-1.295v-1.393h8.256l13.483 1.313c.956.093 1.676.881 1.676 1.814 0 2.89-2.126 5.303-4.926 5.819.397-3.557-2.458-6.62-6.053-6.62-3.646 0-6.504 3.14-6.039 6.723h-9.879c.466-3.588-2.397-6.722-6.039-6.722-3.595 0-6.45 3.062-6.052 6.62-2.14-.398-3.916-1.912-4.61-3.931h1.142c.731 0 1.32-.598 1.285-1.322-.033-.678-.629-1.2-1.322-1.2H20v-.251c0-1.274 1.066-2.243 2.306-2.243h15.62zM42.59 11c2.645 0 4.99 1.556 5.972 3.963l.726 1.779H40.17L38.413 11h4.178zm-6.865 0l1.758 5.741H26.505l3.357-3.654A6.502 6.502 0 0134.644 11h1.082z" fill="#FFD473" fillRule="nonzero" />
            </g>
          </svg>
          }
        btnIcon={
          <svg xmlns="http://www.w3.org/2000/svg" width="43.915" height="20" viewBox="0 0 43.915 20">
            <path id="Path_5" data-name="Path 5" d="M52.936,24.11a3.446,3.446,0,1,1-3.516,3.445A3.482,3.482,0,0,1,52.936,24.11Zm-21.957,0a3.446,3.446,0,1,1-3.516,3.445,3.482,3.482,0,0,1,3.516-3.445Zm6.948-4.848v1.429a1.275,1.275,0,0,0,1.348,1.259,1.3,1.3,0,0,0,1.225-1.3V19.262h8.256l13.483,1.313a1.837,1.837,0,0,1,1.676,1.814,5.966,5.966,0,0,1-4.926,5.819,6.076,6.076,0,1,0-12.092.1H37.018a6.075,6.075,0,1,0-12.091-.1,6.041,6.041,0,0,1-4.61-3.931h1.142a1.273,1.273,0,0,0,1.285-1.322,1.3,1.3,0,0,0-1.322-1.2H20V21.5a2.274,2.274,0,0,1,2.306-2.243h15.62ZM42.59,11a6.4,6.4,0,0,1,5.972,3.963l.726,1.779H40.17L38.413,11h4.178Zm-6.865,0,1.758,5.741H26.5l3.357-3.654A6.5,6.5,0,0,1,34.644,11h1.082Z" transform="translate(-20 -11)" fill="hsl(31, 77%, 52%)" />
          </svg>
        }
        vehicle="SEDANS"
        bgColor="hsl(31, 77%, 52%)"
        copy="Choose the right sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
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