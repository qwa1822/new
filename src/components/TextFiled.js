import { forwardRef } from "react"
import styles from "./TextField.module.css"
import cx from "clsx"

function TextFiled(
  { type = "input", name, placeholder, onChange, error },
  ref,
) {
  return type === "input" ? (
    <input
      name={name}
      ref={ref}
      onChange={onChange}
      className={cx(styles.input, styles.border, {
        [styles.error]: Boolean(error),
      })}
      placeholder="Title"
    />
  ) : (
    <textArea
      name={name}
      placeholder="Leave a commnet"
      className={cx(styles.input, styles.textarea, styles.border)}
    ></textArea>
  )
}

export default forwardRef(TextFiled)
