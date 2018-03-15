import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View } from "react-native"
import Toaster from "react-native-toaster"
import { connect } from "react-redux"

import { white } from "./src/constants"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
})

export const App = ({ toast }) => (
  <div className="main-app">
    <Toaster message={toast} />
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
    </View>
  </div>
)

App.propTypes = {
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export default connect(state => ({
  toast: state.toast,
}))(App)
