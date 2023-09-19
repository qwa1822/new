import Badge from "./Badge"
import ListItemLayout from "./ListItemLayout"
import styles from "./Listitem.module.css"
import dayjs from "dayjs"
export default function Listitem({
  checked,
  onChangeCheckbox,
  onClickTitle,

  data,
  key,
}) {
  const badges = data.labels
  const state = data.state === "open" ? "opened" : "closed"
  const date = data.state === "open" ? data.created_at : data.closed_at
  console.log(badges)
  return (
    <ListItemLayout>
      <div>
        <div className={styles.title} role="button" onClick={onClickTitle}>
          {data.title}
          {badges.length > 0 &&
            badges.map((badgeProps, idx) => (
              <Badge key={idx} {...badgeProps}></Badge>
            ))}
        </div>

        <div className={styles.description}>
          #{data.number}
          {state} {dayjs(date).format()} {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  )
}
