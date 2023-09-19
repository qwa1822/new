import styles from "./Button.module.css"

export function Button({ style, children, type = "button" }) {
  return (
    <button style={style} className={styles.button} type={type}>
      {children}
    </button>
  )
}
