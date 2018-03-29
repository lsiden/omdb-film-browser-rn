import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight, Text, View } from "react-native"

import { appStyles as style } from "styles"

const Banner = ({ onPressAbout }) => (
  <View style={style.banner}>
    <Text style={style.title}>{"Search Open Movie Database"}&nbsp;</Text>
    <TouchableHighlight onPress={onPressAbout}>
      <Icon name={"info-outline"} color={"white"} />
    </TouchableHighlight>
  </View>
)

Banner.propTypes = {
  onPressAbout: PropTypes.func.isRequired
}

export default Banner
