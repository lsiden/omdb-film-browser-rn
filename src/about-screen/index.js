import React from "react"
import { ScrollView, View, Image } from "react-native"

import navOpts from "navigation-options"

import {
  WESTSIDE_CONSULTING_URL,
  SOURCE_CODE_URL,
  OMDB_API_URL,
  CRNA_URL,
  ICONS8_URL
} from "constants"
import { AboutLink, AboutText, AboutLabel } from "./components"
import { aboutStyles as style } from "styles"

const AboutScreen = () => (
  <ScrollView style={style.wrapper}>
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
      <AboutLink url={ICONS8_URL}>{"Icons8"}</AboutLink>
    </View>
    <View style={style.section}>
      <AboutLabel>{"Source code:"}</AboutLabel>
      <AboutLink url={SOURCE_CODE_URL}>{"react-native-omdb-viewer"}</AboutLink>
    </View>
  </ScrollView>
)

AboutScreen.navigationOptions = ({ navigation }) => ({
  ...navOpts(navigation),
  title: "About Open Movie Database Browser",
  headerRight: null
})

export default AboutScreen
