import React from "react"
import PropTypes from "prop-types"
import { ScrollView, View, Text } from "react-native"

import { connect } from "react-redux"
import { viewFilmList } from "actions"
import BackButton from "components/back-button"
import Filler from "components/filler"
import {
  WESTSIDE_CONSULTING_URL,
  SOURCE_CODE_URL,
  OMDB_API_URL,
  CRNA_URL,
} from "constants"
import { AboutLink, AboutText, AboutLabel } from "./components"
import { aboutStyles as style } from "styles"

export const about = ({ dispatchToPrev }) => (
  <ScrollView style={style.wrapper}>
    <View style={style.titleWrapper}>
      <BackButton dispatchToPrev={dispatchToPrev} color={"white"} />
      <Text style={style.title}>{"About"}</Text>
      <Filler />
    </View>
    <View style={style.section}>
      <AboutLabel>{"Written By:"}</AboutLabel>
      <AboutText>{"Lawrence Siden"}</AboutText>
      <AboutLink url={WESTSIDE_CONSULTING_URL}>
        {"Westside Consulting LLC"}
      </AboutLink>
      <AboutLink url={"mailto:westsideconsultingllc@gmail.com"}>
        {"westsideconsultingllc@gmail.com"}
      </AboutLink>
    </View>
    <View style={style.section}>
      <AboutLabel>{"Credits:"}</AboutLabel>
      <AboutLink url={CRNA_URL}>{"Create React Native App"}</AboutLink>
      <AboutLink url={OMDB_API_URL}>{"Open Movie Database"}</AboutLink>
    </View>
    <View style={style.section}>
      <AboutLink url={SOURCE_CODE_URL}>{"Source code"}</AboutLink>
    </View>
  </ScrollView>
)

about.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    filmDetails: state.filmDetails,
  }),
  dispatch => ({
    dispatchToPrev: () => {
      dispatch(viewFilmList())
    },
  })
)(about)
