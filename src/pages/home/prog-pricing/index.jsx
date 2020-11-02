import React from "react"
import "./styles.css"

export default function ProgressivePricing({ className }) {
  return (
    <section id="prog-pricing" className={`slide ${className}`}>
      <div>
        <h2>What about this progressive pricing thing?</h2>
        <p>
          Each time I release a new chapter, the price will be updated to
          reflect the amount of courseware available and the amount of time I
          have invested to bring you this detailed, full featured content.
        </p>
        <p>Buy early, save more!</p>
      </div>
    </section>
  )
}
