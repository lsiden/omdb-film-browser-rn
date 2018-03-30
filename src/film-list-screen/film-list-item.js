import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements"

export default class FilmListItem extends React.PureComponent {
  render() {
    const { onPress, filmSummary } = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
      </TouchableOpacity>
    )
  }
}
FilmListItem.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired
}
