import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ScrollView } from "react-native"

import FilmList from "./film-list"
import SearchBar from "components/search-bar"

export class filmListScreen extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      isFetching: false
    })
  }

  render() {
    return (
      <ScrollView>
        <SearchBar />
        <FilmList />
      </ScrollView>
    )
  }
}

filmListScreen.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  isFetching: PropTypes.bool,
  navigation: PropTypes.object.isRequired
}
filmListScreen.defaultProps = {
  films: [],
  isFetching: false
}

export default connect(state => ({
  films: state.films || [],
  totalResults: state.totalResults || 0,
  isFetching: state.isFetching
}))(filmListScreen)
