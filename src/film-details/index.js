import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ScrollView } from "react-native"
import { List } from "react-native-elements"

import LoadingIndicator from "components/loading-indicator"
import DetailHeader from "./detail-header"
import Poster from "./poster"
import detailItems from "./detail-items"
import FilmPlot from "./film-plot"
import DetailItem from "./detail-item"

// TODO click on poster to make full-screen
export const filmDetail = ({ filmDetails, isFetching }) => {
  let i = 1
  const genKey = () => `item-${i++}`

  if (isFetching) {
    return <LoadingIndicator />
  } else if (!filmDetails) {
    return null
  } else {
    // TODO use FlatList instead of List
    return (
      <ScrollView>
        <DetailHeader />
        <Poster />
        <FilmPlot />
        <List>
          {detailItems(filmDetails).map(detail => (
            <DetailItem key={genKey()} detail={detail} />
          ))}
        </List>
      </ScrollView>
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
  filmDetails: state.filmDetails || {},
  isFetching: state.isFetching,
}))(filmDetail)
