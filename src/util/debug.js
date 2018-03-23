import debug from "debug"

import { APP_NAME } from "constants"

export default tag => debug(`${APP_NAME}:${tag}`)
