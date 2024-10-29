import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Flip, toast, ToastContainer } from "react-toastify"
import {
  selectErrorMessage,
  clearError,
  selectSuccessMessage,
} from "../redux/slices/notificationSlice.js"
import "react-toastify/dist/ReactToastify.css"

const Notification = () => {
  const dispatch = useDispatch()
  const errorMessage = useSelector(selectErrorMessage)
  const successMessage = useSelector(selectSuccessMessage)

  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage)
      dispatch(clearError())
    }
    if (successMessage) {
      toast.success(successMessage)
      dispatch(clearError())
    }
  }, [errorMessage, successMessage, dispatch])

  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      transition={Flip}
      limit={10}
    />
  )
}

export default Notification
