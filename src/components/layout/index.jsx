import React, { useEffect } from "react"
import { isBrowser } from "react-device-detect"

import "./styles.css"
import "./typography.css"

export default function Layout({ children }) {
  useEffect(() => {
    if (isBrowser) return
    let vh = window.innerHeight * 0.01
    console.log("vh", vh)
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return <div className="container">{children}</div>
}
