import { useState } from "react"

export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess, //성공했을때
  onError, //에러가나면 어떻게할건데?
  onSubmit, //값이 전달될때는 어떤 함수/네트워크 를 호출해야해?
}) {
  const [inputValue, setInputValue] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setError] = useState({})

  function onChange(e) {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setIsSubmitting(true)

    const validateResult = validate(inputValue)
    const errorKeys = Object.keys(validateResult)
    setError(validateResult)

    if (errorKeys.length !== 0) {
      const key = errorKeys[0]
      alert(validateResult[key])
      refs[key].current.focus()

      // ref control
      setIsSubmitting(false)
      return
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit()
        onSuccess(result)
      } catch (e) {
        onError()
      }
      return
    }
  }
  return {
    inputValue,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  }
}
