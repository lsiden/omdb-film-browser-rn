import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, Linking, Image, TouchableOpacity } from "react-native"
import { List, ListItem } from "react-native-elements"
import cuid from "cuid"

import { viewList } from "./actions"
import { detailStyles } from "./styles"
import { LEFT_TRIANGLE } from "./constants"
import LoadingIndicator from "./components/loading-indicator"

function renderDetail(detail) {
  const { text, cond = true, url } = detail

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

const imdbUrl = imdbID => `https://www.imdb.com/title/${imdbID}`

const renderBackButton = ({ dispatchViewList }) => (
  <TouchableOpacity onPress={dispatchViewList}>
    <Text style={detailStyles.buttonText}>{LEFT_TRIANGLE}</Text>
  </TouchableOpacity>
)

const renderHeader = props => {
  const { filmSummary } = props
  return (
    <View style={detailStyles.header}>
      {renderBackButton(props)}
      <View style={detailStyles.titleWrapper}>
        <Text style={detailStyles.title}>{filmSummary.Title}</Text>
        <Text style={detailStyles.year}>{`  (${filmSummary.Year})`}</Text>
      </View>
    </View>
  )
}

const renderPoster = ({ filmSummary }) =>
  filmSummary.Poster &&
  filmSummary.Poster !== "N/A" && (
    <Image
      source={{ uri: filmSummary.Poster }}
      style={detailStyles.poster}
      resizeMode={Image.resizeMode.contain}
    />
  )

const renderPlot = ({ filmDetails }) => {
  const { plot } = filmDetails

  if (!plot || plot === "N/A") {
    return (
      <Text style={{ color: "gray", textAlign: "center" }}>
        Plot unavailable
      </Text>
    )
  } else {
    return <Text>{filmDetails.Plot}</Text>
  }
}

const getDetails = (filmDetails, filmSummary) => [
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
    url: filmDetails.imdbID ? imdbUrl(filmDetails.imdbID) : null,
  },
]

// TODO click on poster to make full-screen
export const filmDetail = props => {
  const { filmSummary, filmDetails, isFetching } = props
  if (isFetching) {
    return <LoadingIndicator />
  } else {
    return (
      <View>
        {renderHeader(props)}
        {renderPoster(props)}
        {renderPlot(props)}
        <List>
          {getDetails(filmDetails, filmSummary).map(detail =>
            renderDetail(detail)
          )}
        </List>
      </View>
    )
  }
}

filmDetail.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  filmDetails: PropTypes.object,
  dispatchViewList: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
}

filmDetail.defaultProps = {
  filmDetails: {},
  isFetching: false,
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
