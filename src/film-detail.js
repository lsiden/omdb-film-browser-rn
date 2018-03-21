import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, Linking, Image, TouchableOpacity } from "react-native"
import { List, ListItem } from "react-native-elements"
import cuid from "cuid"

import { viewList } from "./actions"
import { detailStyles } from "./styles"
import { LEFT_TRIANGLE } from "./constants"

function renderItem(item) {
  const { text, cond = true, url } = item

  if (!cond) {
    return null
  }

  const props = {
    style: detailStyles.item,
    key: cuid.slug(),
    title: text,
    hideChevron: true,
  }

  if (url && url !== "N/A") {
    props.onPress = () => {
      Linking.openURL(url)
    }
    props.hideChevron = false
  }
  return <ListItem {...props} />
}

const keyExtractor = item => cuid.slug()

export class filmDetail extends React.Component {
  constructor(props) {
    const { imdbID } = props.filmDetails
    super(props)
    this.imdbUrl = `https://www.imdb.com/title/${imdbID}`
    this.dispatchViewList = props.dispatchViewList.bind(this)
  }

  renderBackButton() {
    const { dispatchViewList } = this.props
    return (
      <TouchableOpacity onPress={dispatchViewList}>
        <Text style={detailStyles.buttonText}>{LEFT_TRIANGLE}</Text>
      </TouchableOpacity>
    )
  }

  renderHeader() {
    const { filmSummary } = this.props
    return (
      <View style={detailStyles.header}>
        {this.renderBackButton()}
        <Text style={detailStyles.title}>{filmSummary.Title}</Text>
      </View>
    )
  }

  getDetails() {
    const { filmSummary, filmDetails } = this.props
    return [
      { text: filmSummary.Year },
      { text: `Directed by ${filmDetails.Director}` },
      { text: `Written by ${filmDetails.Writer}` },
      { text: `Cast: ${filmDetails.Actors}` },
      { text: `Language: ${filmDetails.Language}` },
      { text: `Awards: ${filmDetails.Awards}`, cond: !!filmDetails.Awards },
      { text: `Run Time: ${filmDetails.Runtime}` },
      { text: `IMDB Rating: ${filmDetails.imdbRating}/10` },
      { text: `Box Office: ${filmDetails.BoxOffice}` },
      {
        text: "Official Website",
        url: filmDetails.Website,
        cond: filmDetails.Website && filmDetails.Website !== "N/A",
      },
      {
        text: "IMDB page",
        url: this.imdbUrl ? this.imdbUrl : null,
      },
    ]
  }

  render() {
    const { filmSummary, filmDetails } = this.props
    return (
      <View>
        {this.renderHeader()}
        <Image
          source={{ uri: filmSummary.Poster }}
          style={detailStyles.poster}
          resizeMode={"contain"}
        />
        <List>{this.getDetails().map((item, i) => renderItem(item))}</List>
      </View>
    )
  }
}

filmDetail.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  filmDetails: PropTypes.object,
  dispatchViewList: PropTypes.func.isRequired,
}

filmDetail.defaultProps = {
  filmDetails: {},
}

export default connect(
  state => ({
    filmSummary: state.filmSummary,
    filmDetails: state.filmDetails,
  }),
  dispatch => ({
    dispatchViewList: () => dispatch(viewList()),
  })
)(filmDetail)
