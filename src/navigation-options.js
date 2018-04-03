import React from "react"
import PropTypes from "prop-types"

import { TouchableHighlight, Text, View } from "react-native"
import { Icon } from "react-native-elements"

import { primaryColor, Screens } from "./constants"

const headerWrapperStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "center"
}
const HeaderTitle = ({ style, children }) => (
  <View style={headerWrapperStyle}>
    <Text style={style} numberOfLines={3}>
      {children}
    </Text>
  </View>
)
HeaderTitle.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}

const headerRightStyle = {
  margin: 16
}

// Insert empty right spacer whose width is equal to width of back button on left,
// in order to allow text of header to appear centered.
export const insertRightSpacer = navOpts => ({
  ...navOpts,
  headerRight: null,
  headerTitleStyle: {
    ...(navOpts.headerTitleStyle || {}),
    marginRight: 40
  }
})

const navOptions = navigation => ({
  title: "Open Movie Database Browser",
  headerTitle: HeaderTitle,
  headerTitleStyle: {
    fontSize: 18
  },
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: primaryColor
  },
  headerRight: (
    <TouchableHighlight
      style={headerRightStyle}
      onPress={() => navigation.navigate(Screens.About)}
    >
      <Icon name={"info-outline"} color={"white"} />
    </TouchableHighlight>
  )
})
export default navOptions
