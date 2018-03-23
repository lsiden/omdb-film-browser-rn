import { connect } from "react-redux"

import { viewList, updateIsFetching } from "actions"
import BackButton from "components/back-button"

const mapDispatchToProps = dispatch => ({
  dispatchToPrev: () => {
    dispatch(updateIsFetching(false))
    dispatch(viewList())
  },
})

export default connect(null, mapDispatchToProps)(BackButton)
