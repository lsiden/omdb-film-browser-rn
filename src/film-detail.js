import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Text,
  View,
  FlatList,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native"
import cuid from "cuid"

import { viewList } from "./actions"
import { detailStyles } from "./styles"
import { LEFT_TRIANGLE } from "./constants"

function renderItem(item) {
  const { text, cond = true, url } = item.item

  if (!cond) {
    return null
  }

  const props = {
    style: detailStyles.item,
  }

  if (url) {
    props.onPress = () => {
      Linking.openURL(url)
    }
  }
  return <Text {...props}>{text}</Text>
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

  renderTitle() {
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
        cond: filmDetails.Website,
      },
      {
        text: "IMDB page",
        url: this.imdbUrl,
      },
    ]
  }

  render() {
    const { filmSummary, filmDetails } = this.props
    return (
      <View>
        {this.renderTitle()}
        <Image
          source={{ uri: filmSummary.Poster }}
          style={detailStyles.poster}
          resizeMode={"contain"}
        />
        <FlatList
          data={this.getDetails()}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
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
