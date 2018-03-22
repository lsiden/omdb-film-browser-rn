// Debounces react-native-elements.SearchBar
// TODO - customize for Android and iOS

import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { SearchBar } from "react-native-elements"

import { queryFetch } from "actions/fetch"
import { updateIsFetching } from "actions"

export class searchBar extends React.Component {
  static propTypes = {
    dispatchQuery: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = { query: "" }
    this.onChangeText = this.onChangeText.bind(this)
    this.onTimeout = this.onTimeout.bind(this)
    this.onCancel = this.onCancel.bind(this)
  }

  onTimeout() {
    const { query } = this.state
    this.timeoutId = null

    if (query) {
      this.props.dispatchQuery(query)
    }
  }

  onChangeText(query) {
    this.setState({ query })

    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(this.onTimeout, this.props.delay)
  }

  onCancel() {
    this.setState({ query: "" })
    this.ref.clear()
  }

  render() {
    return (
      <SearchBar
        placeholder="Title..."
        onChangeText={this.onChangeText}
        onCancel={this.onCancel}
        clearIcon={{ color: "#86939e", name: "close" }}
      />
    )
  }
}

searchBar.propTypes = {
  dispatchQuery: PropTypes.func.isRequired,
  delay: PropTypes.number,
}

searchBar.defaultProps = {
  delay: 300,
}

export default connect(null, dispatch => ({
  dispatchQuery: query => {
    dispatch(updateIsFetching(true))
    dispatch(queryFetch(query))
  },
}))(searchBar)
