import { ToastStyles } from "react-native-toaster"

import ActionTypes from "../types"
import { updateToast } from "../toast"

test("updateToast(obj) returns an action with a toast message parameter", () => {
  const text = "Hooray!"

  expect(updateToast(text)).toMatchObject({
    type: ActionTypes.UPDATE_TOAST,
    data: {
      toast: {
        text,
        styles: ToastStyles.info,
      },
    },
  })
})
