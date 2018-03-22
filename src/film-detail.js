import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, Linking, Image, TouchableOpacity } from "react-native"
import { List, ListItem } from "react-native-elements"

import { viewList } from "./actions"
import { detailStyles } from "./styles"
import { LEFT_TRIANGLE } from "./constants"
import LoadingIndicator from "./components/loading-indicator"

const detailExists = detail => detail && detail !== "N/A"

function OneDetail({ detail }) {
  const { text, cond = true, url = null } = detail

  if (!cond) {
    return null
  }

  const props = {
    style: detailStyles.item,
    title: text,
    hideChevron: true,
  }

  if (detailExists(url)) {
    props.onPress = () => {
      Linking.openURL(url)
    }
    props.hideChevron = false
  }
  return <ListItem {...props} />
}

OneDetail.propTypes = {
  detail: PropTypes.object.isRequired,
}

const imdbUrl = imdbID => `https://www.imdb.com/title/${imdbID}`

const renderBackButton = ({ dispatchViewList }) => (
  <TouchableOpacity onPress={dispatchViewList}>
    <Text style={detailStyles.buttonText}>{LEFT_TRIANGLE}</Text>
  </TouchableOpacity>
)
renderBackButton.propTypes = {
  dispatchViewList: PropTypes.func.isRequired,
}

const DetailHeader = props => {
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
DetailHeader.propTypes = {
  filmSummary: PropTypes.object.isRequired,
}

const Poster = ({ filmSummary }) =>
  filmSummary.Poster &&
  filmSummary.Poster !== "N/A" && (
    <Image
      source={{ uri: filmSummary.Poster }}
      style={detailStyles.poster}
      resizeMode={Image.resizeMode.contain}
    />
  )
Poster.propTypes = {
  filmSummary: PropTypes.object.isRequired,
}

const FilmPlot = ({ filmDetails }) => {
  const { plot } = filmDetails

  if (!detailExists(plot)) {
    return <Text style={detailStyles.plot}>Plot unavailable</Text>
  }
  return <Text>{filmDetails.Plot}</Text>
}
FilmPlot.propTypes = {
  filmDetails: PropTypes.object.isRequired,
}

const getDetails = filmDetails => [
  { text: `Directed by ${filmDetails.Director}` },
  { text: `Written by ${filmDetails.Writer}` },
  { text: `Cast: ${filmDetails.Actors}` },
  { text: `Language: ${filmDetails.Language}` },
  { text: `Awards: ${filmDetails.Awards}` },
  { text: `Run Time: ${filmDetails.Runtime}` },
  { text: `IMDB Rating: ${filmDetails.imdbRating}/10` },
  { text: `Box Office: ${filmDetails.BoxOffice}` },
  {
    text: "Official Website",
    url: filmDetails.Website,
    cond: detailExists(filmDetails.Website),
  },
  {
    text: "IMDB page",
    url: filmDetails.imdbID ? imdbUrl(filmDetails.imdbID) : null,
  },
]

// TODO click on poster to make full-screen
export const filmDetail = props => {
  const { filmSummary, filmDetails, isFetching } = props
  const details = getDetails(filmDetails, filmSummary)
  let i = 1

  if (isFetching) {
    return <LoadingIndicator />
  } else if (!filmDetails) {
    return null
  } else {
    return (
      <View>
        <DetailHeader {...props} />
        <Poster {...props} />
        <FilmPlot {...props} />
        <List>
          {details.map(detail => (
            <OneDetail key={`item=${i++}`} detail={detail} />
          ))}
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
