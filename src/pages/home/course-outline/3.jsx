import React from "react"

export default function CourseOutline1({ className }) {
  return (
    <section className={`slide dk-bg`}>
      <div>
        <h2>The Course Outine </h2>
        <h3>(continued)</h3>
        <ol>
          <li>
            Example Components
            <ol>
              <li>Lists</li>
              <li>DataTables</li>
              <li>Filtering</li>
              <li>Sorting</li>
              <li>Composition</li>
              <li>Text Fields</li>
              <li>Checkboxes</li>
              <li>Radio buttons</li>
              <li>In place editing</li>
            </ol>
          </li>

          <li>
            SPA Routing
            <ol>
              <li>Browser Router</li>
              <li>Component Switching</li>
              <li>Router Links</li>
              <li>Programatic Routing</li>
              <li>Dynamic Route Params</li>
              <li>Search Param Queries</li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
  )
}
