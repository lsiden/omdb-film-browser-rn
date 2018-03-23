import { connect } from "react-redux"

import { viewFilmDetails, updateIsFetching } from "actions"
import BackButton from "components/back-button"

const mapDispatchToProps = dispatch => ({
  dispatchToPrev: () => {
    dispatch(updateIsFetching(false))
    dispatch(viewFilmDetails())
  },
})

export default connect(null, mapDispatchToProps)(BackButton)
