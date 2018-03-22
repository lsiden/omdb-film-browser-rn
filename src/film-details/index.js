import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, Linking } from "react-native"
import { List, ListItem } from "react-native-elements"

import { detailStyles } from "styles"
import LoadingIndicator from "components/loading-indicator"
import DetailHeader from "./detail-header"
import Poster from "./poster"
import detailItems from "./detail-items"
import FilmPlot from "./film-plot"

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

// TODO click on poster to make full-screen
export const filmDetail = props => {
  const { filmDetails, isFetching } = props
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
          {detailItems(filmDetails).map(detail => (
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
  isFetching: PropTypes.bool,
}

filmDetail.defaultProps = {
  filmDetails: {},
  isFetching: false,
}

export default connect(state => ({
  filmSummary: state.filmSummary,
  filmDetails: state.filmDetails,
}))(filmDetail)
