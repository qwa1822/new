import styles from "./Pagination.module.css"
import cx from "clsx"

export default function Pagination({
  currentPage,
  maxPage,
  onClickMoveToPage,
}) {
  return (
    <div className={cx(styles.menu)}>
      <button
        className={cx(styles.button, { [styles.disabled]: currentPage === 1 })}
      >
        {"<previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, idx) => (
        <PageButton
          number={idx + 1}
          selected={idx + 1 === currentPage}
          onClick={onClickMoveToPage}
        >
          {idx}
        </PageButton>
      ))}
      <button
        className={cx(styles.button, {
          [styles.disabled]: currentPage === maxPage,
        })}
      >
        {"next>"}
      </button>
    </div>
  )
}

function PageButton({ number, onClick, selected }) {
  return (
    <button
      onClick={() => onClick(number)}
      className={cx(styles.button, { [styles.selected]: selected })}
    >
      {number}
    </button>
  )
}
