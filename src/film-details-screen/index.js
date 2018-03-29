import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LoadingIndicator from "components/loading-indicator"
import { fetchFilmDetails } from "actions/fetch"
import FilmDetails from "./film-details"

export class filmDetailsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      isFetching: false
    })
  }

  componentWillMount() {
    const { filmDetails, navigation } = this.props
    const { filmSummary } = navigation.state

    if (!filmDetails) {
      fetchFilmDetails(filmSummary.imdbID)
      this.setState({ isFetching: true })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.filmDetails && nextProps.filmDetails) {
      this.setState({ isFetching: false })
    }
  }

  render() {
    const { isFetching } = this.state

    if (isFetching) {
      return <LoadingIndicator />
    } else {
      return <FilmDetails />
    }
  }
}

filmDetailsScreen.propTypes = {
  filmDetails: PropTypes.object,
  navigation: PropTypes.object.isRequired
}

filmDetailsScreen.defaultProps = {
  isFetching: false
}

export default connect(
  state => ({
    filmDetails: state.filmDetails || {},
    isFetching: state.isFetching
  }),
  dispatch => ({
    dispatchFetchFilmDetails: imdbID => dispatch(fetchFilmDetails(imdbID))
  })
)(filmDetailsScreen)
