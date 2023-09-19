import { Children, useEffect, useState } from "react"
import styles from "./ListContainer.module.css"
import { Button } from "./components/Button"
import Listitem from "./components/Listitems"
import ListItemLayout from "./components/ListItemLayout"

import { Link, useSearchParams } from "react-router-dom"
import cx from "clsx"
import Modal from "./components/Modal"
import Pagination from "./components/Paginnation"
import axios from "axios"
export default function ListContainer() {
  const [inputValue, setinputValue] = useState("")

  const [isOpenMode, setIsOpenMode] = useState(true)
  const [list, setList] = useState([])

  const openModeDatasize = 1
  const closeModeDataSize = 2

  const [searchParams, setSearchParams] = useSearchParams()

  // const [modalState, setModalState] = useState(
  //   Array(Listitem.length).fill(true),
  // )

  const filterList = ["Label", "MileStone", "Assignee"]
  const [showModal, setModal] = useState(false)
  const [checkdList, setCheckdList] = useState([])

  const page = parseInt(searchParams.get("page"), 10)

  console.log({ page })
  const [filterItemColor, setFilterItem] = useState("")

  const [searchValue, setSearchValue] = useState("")
  const [filterDate, setFilterData] = useState(searchValue)
  const mode = searchParams.get("mode")
  const inputSetValue = (e) => {
    setinputValue(e.target.value)
  }

  async function getData(params) {
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`,
      {
        params,
      },
    )
    setList(data)
  }

  // async function getDate2(apiPath) {
  //   const data = await axios.get(
  //     `https://api.github.com/repos/facebook/react/${apiPath}`,
  //   )

  //   let result = []

  //   // 데아터 가공 name
  //   setList(result)

  //   setList(data)
  //   switch (apiPath) {
  //     case "assigness":
  //       result = data.data.map((d) => ({
  //         name: d.login,
  //       }))
  //     case "milestones":
  //       result = data.data.map((d) => ({
  //         name: d.title,
  //       }))
  //     case "labels":
  //     default:
  //       result = data.data
  //   }
  // }

  // useEffect(() => {
  //   if (showModal) {
  //     const apiPath = `${showModal.toLowerCase()}s`
  //     getDate2(apiPath)
  //   }
  // }, [showModal])

  useEffect(() => {
    getData({ page, state: isOpenMode ? "open" : "closed" })
  }, [page, isOpenMode]) // componentDidMount();

  // const openModal = (idx) => {
  //   const newModalStates = [...modalState]
  //   newModalStates[idx] = true
  //   setModalState(newModalStates)
  // }

  // const closeModal = (idx) => {
  //   const newModalState = [...modalState]
  //   newModalState[idx] = false
  //   setModalState(newModalState)
  // }

  let ListItems = ["author", "Projects", "category", "items", "menu"]

  const HandleMouseOver = (idx) => {
    setFilterItem(idx)
  }
  const HandlerMouseOut = () => {
    setFilterItem(false)
  }

  const onClose = (e) => {
    setCheckdList(false)
  }

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            onChange={inputSetValue}
            value={inputValue}
            className={styles.input}
          />
          <Link to="/new" className={styles.link}>
            <Button
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
            >
              New 이슈다
            </Button>
          </Link>
        </div>

        {/*  Open Close Component */}
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />

        {/* ListItems Component */}

        <ListItemLayout className={styles.listFilter}>
          <div className={styles.filterList}>
            {filterList.map((item, idx) => (
              <>
                <span
                  onMouseOver={() => HandleMouseOver(idx)}
                  onClick={() => setModal(true)}
                  onMouseOut={HandlerMouseOut}
                  className={cx(styles.modals, {
                    [styles.filterListHover]: filterItemColor === idx,
                  })}
                  style={{ position: "relative" }}
                >
                  {item}
                </span>

                <Modal
                  searchDataList={["bug", "labels", "apple"]}
                  placeholder={`Filter labels ${item}`}
                  selectedTitle={item}
                  opened={showModal}
                  onClose={() => setModal(false)}
                  onClickCell={() => {
                    // 클릭 된 정보를 통해 리스트 필터링
                    // onChangeFilter()
                  }}
                  style={{ position: "absolute", top: "40px", left: "30px" }} // 이 부분 추가
                />
              </>
            ))}
          </div>
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listitem, index) => (
            <Listitem key={listitem.id} data={listitem} />
          ))}
        </div>
      </div>
      <Pagination
        maxPage={10}
        currentPage={page}
        onClickMoveToPage={(number) => setSearchParams({ page: number })}
      />
    </>
  )
}

function OpenClosedFilters({ isOpenMode, onClickMode }) {
  // const [isOpenMode, setIsOpenMode] = useState(true)
  // const openModeDatasize = 1
  // const closeModeDataSize = 2
  return (
    <>
      <OpenCLosedFilter
        isOpenMode={isOpenMode}
        // size={openModeDatasize}
        state={"Open"}
        selected={isOpenMode}
        onClick={() => onClickMode(true)}
      ></OpenCLosedFilter>
      <OpenCLosedFilter
        // size={closeModeDataSize}
        state={"Closed"}
        selected={!isOpenMode}
        onClick={() => onClickMode(false)}
      ></OpenCLosedFilter>
    </>
  )
}

function OpenCLosedFilter({ size, state, onClick, selected }) {
  return (
    <span
      role="button"
      onClick={onClick}
      className={cx(styles.textFilter, { [styles.selected]: selected })}
    >
      {size} {state}
    </span>
  )
}
