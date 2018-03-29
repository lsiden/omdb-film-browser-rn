import React from "react"
import PropTypes from "prop-types"
import { Image, Text, View } from "react-native"
import { connect } from "react-redux"
import GestureRecognizer from "react-native-swipe-gestures"

import { fullScreenPosterStyles as style } from "styles"

const hintWrapperStyle = {
  alignContent: "center"
}
const hintStyle = {
  color: "darkgray",
  marginTop: 5,
  marginBottom: 5,
  textAlign: "center"
}

export const posterScreen = ({ navigation }) => {
  const { uri } = navigation.state
  return uri ? (
    <GestureRecognizer
      style={style.wrapper}
      onSwipe={navigation.navigate("Details")}
    >
      <Image
        source={{ uri }}
        style={style.poster}
        resizeMode={"contain"}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
      <View hintWrapperStyle={hintWrapperStyle}>
        <Text style={hintStyle}>{"Dismiss by swiping."}</Text>
      </View>
    </GestureRecognizer>
  ) : null
}

posterScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default connect(state => ({
  uri: (state.poster || {}).uri
}))(posterScreen)
