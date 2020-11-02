import React from "react"
import CourseOutline1 from "./1"
import CourseOutline2 from "./2"
import CourseOutline3 from "./3"
import "./styles.css"

export default function CourseOutline({ className }) {
  return (
    <>
      <CourseOutline1 />
      <CourseOutline2 />
      <CourseOutline3 />
    </>
  )
}
