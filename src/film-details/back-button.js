import { connect } from "react-redux"

import { viewFilmList, updateIsFetching } from "actions"
import BackButton from "components/back-button"

const mapDispatchToProps = dispatch => ({
  dispatchToPrev: () => {
    dispatch(updateIsFetching(false))
    dispatch(viewFilmList())
  },
})

export default connect(null, mapDispatchToProps)(BackButton)
