import React from "react"
import "./styles.css"

export default function EaPricing({ className }) {
  return (
    <section id="ea-pricing" className={`slide ${className}`}>
      <div>
        <h2>It sounds GREAT but how much will it cost?</h2>
        <p>
          I will be doing a variable, progressive pricing. What the hell does
          that mean?
        </p>
        <p>
          I will be releasing the course as I complete it, and those of you who
          buy it early, you will be getting it a a great discount.
        </p>
        <p>
          At launch the entire course will be available for $75 USD for the full
          package for lifetime access, including all future updates!
        </p>
      </div>
    </section>
  )
}
