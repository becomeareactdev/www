import React from "react"
import "./styles.css"

export default function Mark({ className }) {
  return (
    <section id="mark" className={`slide ${className}`}>
      <div>
        <h2>Meet your Instructor</h2>
        <p>
          Hi. My name is Mark Tellez and I have been a JavaScript developer
          since 1997. I have spent my entire adult life writing software for the
          web and I did it without going to University or even graduating High
          School!
        </p>
        <p>
          If you want to succeed in this industry, all it takes is a good head
          on your shoulders (this IS thought-work after all), a love for solving
          puzzles/problems, and a determination that won't quit.
        </p>
        <p>
          It is my job to teach you the good parts of JavaScript, the most
          useful aspects of functional programming, and of course, how to write
          beautiful, clean ReactJS code!
        </p>
      </div>
    </section>
  )
}
