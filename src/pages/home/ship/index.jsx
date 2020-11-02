import React from "react"
import ufo from "./ufo.png"
import "./styles.css"

export default function Ship({ className }) {
  return (
    <section id="ship" className={`slide ${className}`}>
      <div>
        <h1>
          <span className="top">become a</span>
          <span className="middle">ReactJS</span>
          <span className="bottom">Web Developer</span>
        </h1>

        <img src={ufo} alt="ufo" className="ufo" />

        <h2>
          <div className="caret">
            <div className="text">modern!</div>
            <div className="symbol">^</div>
          </div>
          <div className="top">The complete</div>
          <div className="bottom">
            <span className="black">ReactJS</span> course
          </div>
        </h2>
      </div>
    </section>
  )
}
