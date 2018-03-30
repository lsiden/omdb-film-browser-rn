import React from "react"
import PropTypes from "prop-types"
import { ScrollView } from "react-native"
import { List } from "react-native-elements"

import Poster from "./poster"
import FilmPlot from "./film-plot"
import DetailItem from "./detail-item"
import detailItems from "./detail-items"
import { detailStyles as style } from "styles"

let i = 1
const genKey = () => `item-${i++}`

const FilmDetails = ({ details, onPressPoster }) => (
  <ScrollView style={style.wrapper}>
    <Poster uri={details.Poster} onPress={onPressPoster} />
    <FilmPlot />
    <List>
      {detailItems(details).map(detail => (
        <DetailItem key={genKey()} detail={detail} />
      ))}
    </List>
  </ScrollView>
)

FilmDetails.propTypes = {
  details: PropTypes.object.isRequired,
  onPressPoster: PropTypes.func.isRequired
}

export default FilmDetails
