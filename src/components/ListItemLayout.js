import cx from "clsx"

import styles from "./ListitemsLayout.module.css"
export default function ListItemLayout({ children, className }) {
  return (
    <div className={cx(styles.wrapper, className)}>
      <input
        type="checkbox"
        // onChange={onChangeCheckbox}
        className={styles.checkbox}
        // value={checked}
      />
      {children}
    </div>
  )
}
