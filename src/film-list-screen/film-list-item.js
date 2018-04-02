import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements"

import { fetchFilmDetails } from "actions/fetch"

export class filmListItem extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
    this.onPressDebounced = this.onPressDebounced.bind(this)
    this.onPressTimeout = null
  }

  onPress() {
    console.debug("onPress()")
    const {
      filmSummary,
      dispatchFetchFilmDetails,
      navigateToDetailsScreen
    } = this.props
    dispatchFetchFilmDetails(filmSummary.imdbID)
    navigateToDetailsScreen({ filmSummary })
  }

  onPressDebounced() {
    console.debug("onPressDebounced()")
    if (this.timeoutId) {
      return
    }
    this.onPress()
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null
    }, 1000)
  }

  render() {
    const { filmSummary } = this.props
    return (
      <TouchableOpacity onPress={this.onPressDebounced}>
        <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
      </TouchableOpacity>
    )
  }
}

filmListItem.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  navigateToDetailsScreen: PropTypes.func.isRequired,
  dispatchFetchFilmDetails: PropTypes.func.isRequired
}

export default connect(null, dispatch => ({
  dispatchFetchFilmDetails: imdbID => {
    dispatch(fetchFilmDetails(imdbID))
  }
}))(filmListItem)
