import React from "react"
import "./styles.css"

export default function Basics({ className }) {
  return (
    <section id="react-basics" className={`slide ${className}`}>
      <div>
        <h2>Do I have to know JavaScript first?</h2>
        <p>
          No. I will start you out the basics of JavaScript that you need to
          know to write good React code.
        </p>
        <p className="hero black">
          f<span className="small">(x)</span>
        </p>
        <p>
          My goal is not to teach you all of JavaScript before learning ReactJS.
          Instead I will teach you the good parts of JavaScript with a focus on
          functional programming.
        </p>
        <p>
          Functional programming is the future, and ReactJS is uniquely built to
          utilize it.
        </p>
      </div>
    </section>
  )
}
