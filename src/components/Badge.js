import { useState } from "react"
import styles from "./Badge.module.css"
import cx from "clsx"

export default function Badge({ color, name }) {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  )
}
