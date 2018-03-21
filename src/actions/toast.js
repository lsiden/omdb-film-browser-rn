import { Actions } from "./"
import Toaster, { ToastStyles } from "react-native-toaster"

// Severity must be one of 'error', 'warning', 'success', or 'info'
export const updateToast = (text, severity = "info") => ({
  type: Actions.UPDATE_TOAST,
  data: {
    toast: {
      text,
      styles: ToastStyles[severity] || ToastStyles.info,
    },
  },
})
