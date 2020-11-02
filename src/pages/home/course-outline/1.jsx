import React from "react"

export default function CourseOutline1({ className }) {
  return (
    <section className={`slide dk-bg`}>
      <div>
        <h2>The Course Outine</h2>
        <ol>
          <li>
            JavaScript Basics
            <ol>
              <li>Variables and Types</li>
              <li>Functions and Closure</li>
              <li>Data Structures</li>
              <li>Functional Programming</li>
              <li>map, filter, and reduce</li>
              <li>Interfaces/dynanisism</li>
            </ol>
          </li>

          <li>
            Creating Components
            <ol>
              <li>Props and Prop Types</li>
              <li>What is JSX</li>
              <li>Conditional Rendering</li>
              <li>Click Handlers</li>
              <li>Event Listeners</li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
  )
}
