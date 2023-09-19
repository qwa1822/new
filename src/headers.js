import { Button } from "./components/Button"
import { Space } from "./components/Space"
import Tabs from "./components/Tab"
import styles from "./headers.module.css"

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.buttonContainer}>
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Watch {}
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Fork <div className={styles.circle}>3</div>
        </Button>
        <Space />
        <Button
          style={{
            fontSize: "14px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          Star
        </Button>
      </div>
      <Tabs title="title" number={5} />
    </div>
  )
}
