import React from "react"
import PropTypes from "prop-types"
import { ScrollView } from "react-native"
import { List } from "react-native-elements"

import DetailHeader from "./detail-header"
import Poster from "./poster"
import FilmPlot from "./film-plot"
import DetailItem from "./detail-item"
import detailItems from "./detail-items"

let i = 1
const genKey = () => `item-${i++}`

const FilmDetails = ({ details }) => (
  <ScrollView>
    <DetailHeader />
    <Poster />
    <FilmPlot />
    <List>
      {detailItems(details).map(detail => (
        <DetailItem key={genKey()} detail={detail} />
      ))}
    </List>
  </ScrollView>
)

FilmDetails.propTypes = {
  details: PropTypes.object.isRequired
}

export default FilmDetails
