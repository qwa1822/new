import { useState } from "react"
import styles from "./Tab.module.css"

import { Link, useLocation } from "react-router-dom"
import cx from "clsx"

const tabList = [
  { name: "Code", pathname: "/code" },
  { name: "Issues", pathname: "/issue" },
  { name: "Actions", pathname: "/Actions" },
  { name: "Projects", pathname: "/Projects" },
  { name: "Security", pathname: "/Security" },
]
export default function Tabs() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0)
  const location = useLocation()
  const { pathname } = useLocation()

  return (
    <>
      <ul className={styles.menu}>
        {tabList.map((item, idx) => (
          <Tab
            title={item.name}
            key={idx}
            item={item}
            onClick={() => setSelectedTabIdx(idx)}
            selected={
              (pathname === "/" ? "/issue" : pathname) === item.pathname
            }
          ></Tab>
        ))}
      </ul>
    </>
  )
}

function Tab({ item, title, selected, onClick, number }) {
  return (
    <li>
      <Link to={item.pathname}>
        <button
          onClick={onClick}
          className={cx(styles.tab, { [styles.selected]: selected })}
        >
          <span>{title}</span>
          {number && <div className={styles.circle}>{number}</div>}
        </button>
      </Link>
    </li>
  )
}
