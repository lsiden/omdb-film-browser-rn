import React from "react"
import PropTypes from "prop-types"
import { ScrollView, View, Text, Linking } from "react-native"

import { connect } from "react-redux"
import { viewFilmList } from "actions"
import BackButton from "components/back-button"
import Filler from "components/filler"
import { PRIMARY_COLOR } from "./styles"
import {
  WESTSIDE_CONSULTING_URL,
  SOURCE_CODE_URL,
  OMDB_API_URL,
  CRNA_URL,
} from "./constants"

const wrapperStyle = {
  height: "99%",
  alignContent: "flex-start",
  backgroundColor: PRIMARY_COLOR,
  marginTop: 5,
}
const titleWrapperStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 10,
}
const aboutSectionStyle = {
  alignItems: "center",
  marginTop: 15,
  marginBottom: 15,
}
const itemStyle = {
  color: "white",
  marginBottom: 10,
}
const titleStyle = [
  itemStyle,
  {
    fontSize: 18,
  },
]
const aboutTextStyle = [
  itemStyle,
  {
    fontSize: 16,
  },
]
const aboutLinkStyle = [aboutTextStyle, { textDecorationLine: "underline" }]
const aboutLabelStyle = [
  itemStyle,
  {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
]

const childType = PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  .isRequired

const AboutLink = ({ url, children }) => (
  <Text style={aboutLinkStyle} onPress={() => Linking.openURL(url)}>
    {children}
  </Text>
)

AboutLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: childType,
}

const AboutText = ({ children }) => (
  <Text style={aboutTextStyle}>{children}</Text>
)

AboutText.propTypes = {
  children: childType,
}

const AboutLabel = ({ children }) => (
  <Text style={aboutLabelStyle}>{children}</Text>
)
AboutLabel.propTypes = {
  children: childType,
}

export const about = ({ dispatchToPrev }) => (
  <ScrollView style={wrapperStyle}>
    <View style={titleWrapperStyle}>
      <BackButton dispatchToPrev={dispatchToPrev} color={"white"} />
      <Text style={titleStyle}>{"About"}</Text>
      <Filler />
    </View>
    <View style={aboutSectionStyle}>
      <AboutLabel>{"Written By:"}</AboutLabel>
      <AboutText>{"Lawrence Siden,"}</AboutText>
      <AboutLink url={WESTSIDE_CONSULTING_URL}>
        {"Westside Consulting LLC"}
      </AboutLink>
      <AboutLink url={"mailto:westsideconsultingllc@gmail.com"}>
        {"westsideconsultingllc@gmail.com"}
      </AboutLink>
      <AboutLink url={SOURCE_CODE_URL}>{"Source code"}</AboutLink>
    </View>
    <View style={aboutSectionStyle}>
      <AboutLabel>{"Credits:"}</AboutLabel>
      <AboutLink url={CRNA_URL}>{"Create React Native App"}</AboutLink>
      <AboutLink url={OMDB_API_URL}>{"Open Movie Database"}</AboutLink>
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
