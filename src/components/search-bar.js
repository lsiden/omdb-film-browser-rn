// Debounces react-native-elements.SearchBar

import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { SearchBar } from "react-native-elements"
import { Platform } from "react-native"

import { fetchNewQuery } from "actions/fetch"

const inputStyle = { color: "black", paddingLeft: 44 }
const iconStyle = {
  fontSize: 30,
  marginTop: -7,
  marginRight: 5
}

export class searchBar extends React.Component {
  static propTypes = {
    dispatchQuery: PropTypes.func.isRequired
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
        lightTheme
        placeholder="Title..."
        inputStyle={inputStyle}
        onChangeText={this.onChangeText}
        onCancel={this.onCancel}
        icon={{
          name: "search",
          color: "black",
          style: iconStyle
        }}
        clearIcon={{ name: "close", color: "black" }}
        platform={Platform.OS}
      />
    )
  }
}

searchBar.propTypes = {
  dispatchQuery: PropTypes.func.isRequired,
  delay: PropTypes.number
}

searchBar.defaultProps = {
  delay: 300
}

export default connect(null, dispatch => ({
  dispatchQuery: query => {
    dispatch(fetchNewQuery(query))
  }
}))(searchBar)
