import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements"

import { updateFilmDetails } from "actions"
import { fetchFilmDetails } from "actions/fetch"

export class filmListItem extends React.PureComponent {
  constructor(props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    const {
      filmSummary,
      dispatchFetchFilmDetails,
      navigateToDetailsScreen
    } = this.props
    dispatchFetchFilmDetails(filmSummary.imdbID)
    navigateToDetailsScreen({ filmSummary })
  }

  render() {
    const { filmSummary } = this.props
    return (
      <TouchableOpacity onPress={this.onPress}>
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
    dispatch(updateFilmDetails(null))
    dispatch(fetchFilmDetails(imdbID))
  }
}))(filmListItem)
