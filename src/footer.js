import { useState } from "react"
import styles from "./footer.module.css"
import cx from "clsx"

const URL_PREFIX = "https://docs.github.com/en/site-policy"

const footeritems = [
  {
    title: "Terms",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Privacy",
    link: `${URL_PREFIX}/github-terms/github-terms-of-service`,
  },
  {
    title: "Security",
    link: `https://github.com/security`,
  },
  {
    title: "Status",
    link: "https://www.githubstatus.com/",
  },
  {
    title: "Docs",
    link: "https:/docs.github.com/en",
  },
  {
    title: "About",
    link: "https:/docs.github.com/en",
  },
  {
    title: "Security",
    link: "https:/docs.github.com/en",
  },
  {
    title: "Hit",
    link: "https:/docs.github.com/en",
  },
  {
    title: "Hit",
    link: "https:/docs.github.com/en",
  },
]

export default function Footer() {
  const [selected, setSelected] = useState(null)

  const HandleMouseOver = (idx) => {
    setSelected(idx)
  }
  const HandleMouseOut = () => {
    setSelected(null)
  }

  return (
    <ul className={styles.footer}>
      {footeritems.map((item, idx) => (
        <FooterItems
          key={idx}
          onMouseOver={() => HandleMouseOver(idx)}
          onMouseOut={HandleMouseOut}
          selected={selected === idx}
          title={item.title}
          link={item.link}
        />
      ))}
    </ul>
  )
}

function FooterItems({ title, link, selected, onMouseOver, onMouseOut }) {
  return (
    <li className={styles.items} key={Math.random() * 100}>
      <a
        className={cx(styles.link, { [styles.ActiveLink]: selected })}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        href={link}
      >
        {title}
      </a>
    </li>
  )
}
