import React from "react"
import PropTypes from "prop-types"
import { ScrollView } from "react-native"

import Poster from "./poster"
import FilmPlot from "./film-plot"
import DetailItem from "./detail-item"
import detailItems from "./detail-items"
import style from "./style"

let i = 1
const genKey = () => `item-${i++}`

const FilmDetails = ({ details, onPressPoster }) => (
  <ScrollView contentContainerStyle={style.wrapper}>
    <Poster uri={details.Poster} onPress={onPressPoster} />
    <FilmPlot />
    {detailItems(details)
      .filter(({ cond = true }) => cond)
      .map(detail => <DetailItem key={genKey()} detail={detail} />)}
  </ScrollView>
)

FilmDetails.propTypes = {
  details: PropTypes.object.isRequired,
  onPressPoster: PropTypes.func.isRequired
}

export default FilmDetails
