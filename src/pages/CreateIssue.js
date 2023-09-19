import { useEffect, useRef, useState } from "react"
import { Button } from "../components/Button"
import styles from "./createIssue.module.css"
import cx from "clsx"
import TextFiled from "../components/TextFiled"
import { useForm } from "./hooks"
import axios from "axios"

export default function CreateIssue() {
  const inputRef = useRef()
  const textareaRef = useRef()
  const gitHubAPi = "https://api.github.com/repos"

  const { isSubmitting, inputValue, onChange, errors, handleSubmit } = useForm({
    initialValues: { title: "", body: "" },
    onSubmit: () => console.log("Submit"),
    // async () =>
    //   await axios.post(
    //     `${gitHubAPi}/qwa1822/new/issues`,
    //     {
    //       title: "Example",
    //     },
    //     {
    //       headers: {
    //         Authorization: process.env.REACT_APP_GITHUB_TOKEN,
    //         "Content-Type": "application/json",
    //       },
    //     },
    //   ),
    validate,
    refs: { title: inputRef, body: textareaRef },
    onErrors: () => console.log("error"),
    onSuccess: (result) => {
      console.log({ result })
    },
  })
  return (
    <>
      <div className={styles.container}>
        <div className={styles.avatar}></div>
        <div className={cx(styles.inputWrapper, styles.border)}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <TextFiled
              ref={inputRef}
              value={inputValue.name}
              error={errors.title}
              name="title"
              placeholder="title"
              onChange={onChange}
            />
            <TextFiled
              ref={textareaRef}
              type="textarea"
              error={errors.body}
              value={inputValue.body}
              name="body"
              onChange={onChange}
              placeholder="Leave a comment"
            />

            <div className={styles.buttonWrapper}>
              <Button
                type="submit"
                style={{
                  fontSize: "14px",
                  backgroundColor: "green",
                  color: "white",
                }}
              >
                Submit new Issue
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

function validate(values) {
  let errors = {}

  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다" }
  }

  return errors
}
