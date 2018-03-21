import { ToastStyles } from "react-native-toaster"

import { Actions } from "../"
import { updateToast } from "../toast"

test("updateToast(obj) returns an action with a toast message parameter", () => {
  const text = "Hooray!"

  expect(updateToast(text)).toMatchObject({
    type: Actions.UPDATE_TOAST,
    data: {
      toast: {
        text,
        styles: ToastStyles.info,
      },
    },
  })
})
