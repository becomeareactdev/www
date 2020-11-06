import React from "react"

export default function CourseOutline2() {
  return (
    <section className={`slide md-bg`}>
      <div>
        <h2>The Course Outine </h2>
        <h3>(continued)</h3>
        <ol>
          <li>
            React State
            <ol>
              <li>Component State</li>
              <li>Application State</li>
              <li>Glocal State</li>
              <li>Persistent State</li>
              <li>Loading API Data</li>
            </ol>
          </li>

          <li>
            Forms and Inputs
            <ol>
              <li>Text Inputs</li>
              <li>Selects/Dropdowns</li>
              <li>Checkboxes</li>
              <li>Imperative operations</li>
              <li>Submitting forms (fetch, axios)</li>
              <li>Form/field Validation</li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
  )
}
