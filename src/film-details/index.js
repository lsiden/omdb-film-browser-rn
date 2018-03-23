import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View } from "react-native"
import { List } from "react-native-elements"

import LoadingIndicator from "components/loading-indicator"
import DetailHeader from "./detail-header"
import Poster from "./poster"
import detailItems from "./detail-items"
import FilmPlot from "./film-plot"
import DetailItem from "./detail-item"

// TODO click on poster to make full-screen
export const filmDetail = props => {
  const { filmDetails, isFetching } = props
  let i = 1
  const genKey = () => `item-${i++}`

  if (isFetching) {
    return <LoadingIndicator />
  } else if (!filmDetails) {
    return null
  } else {
    return (
      <View>
        <DetailHeader />
        <Poster />
        <FilmPlot plot={filmDetails.Plot} />
        <List>
          {detailItems(filmDetails).map(detail => (
            <DetailItem key={genKey()} detail={detail} />
          ))}
        </List>
      </View>
    )
  }
}

filmDetail.propTypes = {
  filmDetails: PropTypes.object,
  isFetching: PropTypes.bool,
}

filmDetail.defaultProps = {
  isFetching: false,
}

export default connect(state => ({
  filmDetails: state.filmDetails,
  isFetching: state.isFetching,
}))(filmDetail)
