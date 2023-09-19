import { useEffect, useState } from "react"
import styles from "./Modal.module.css"
import cx from "clsx"
export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  selectedTitle,

  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSerachValue] = useState("")
  const [filteredData, setFilteredData] = useState(searchDataList)

  useEffect(() => {
    // setFilteredData(["apple"])
    const regex = new RegExp(searchValue, "i")
    const filteredResults = searchDataList.filter((item) => regex.test(item))

    setFilteredData(filteredResults)
  }, [searchDataList, searchValue])
  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span> Filter By {selectedTitle}</span>
        <button onClick={onClose}>❌</button>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSerachValue(e.target.value)}
        />
      </div>
      {filteredData.map((data) => (
        <div key={data} onCLick={onClickCell} role="button">
          {data}
        </div>
      ))}
    </div>
  )
}

// portal
