import React from "react"
import headshot from "./mark.png"

export default function Mark1() {
  return (
    <section id="meet" className={`slide dk-bg`}>
      <div>
        <h2>Meet your Instructor</h2>
        <p>
          Hi. My name is Mark Tellez and I have been a JavaScript developer
          since 1997. I have spent my entire adult life writing software for the
          web and I did it without going to University or even graduating High
          School!
        </p>
        <center>
          <img
            src={headshot}
            style={{ width: "50%" }}
            alt="Mark Tellez, Sr JavaScript Consultant"
          />
        </center>
      </div>
    </section>
  )
}
