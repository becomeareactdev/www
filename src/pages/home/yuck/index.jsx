import React from "react"
import "./styles.css"

export default function Yuck({ className }) {
  return (
    <section id="yuck" className={`slide ${className}`}>
      <div>
        <h2>
          Most <span className="black">ReactJS</span> courses are{" "}
          <span className="black">structured</span> like a{" "}
          <span className="black">dictionary</span>.
        </h2>

        <div className="hero black">Yuck!</div>

        <p>
          Instead of organizing my content like an instruction manual, I will
          take you through practical uses, leveling you up along the way, to
          more and more complex examples!
        </p>
      </div>
    </section>
  )
}
