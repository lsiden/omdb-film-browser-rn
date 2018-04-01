import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity } from "react-native"
import { ListItem } from "react-native-elements"

// FIXME https://github.com/archriss/react-native-snap-carousel/issues/208
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
