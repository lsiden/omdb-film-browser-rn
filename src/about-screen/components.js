import React from "react"
import PropTypes from "prop-types"
import { Text, Linking } from "react-native"
import { aboutStyles as style } from "styles"

const childType = PropTypes.oneOfType([PropTypes.element, PropTypes.string])
  .isRequired

export const AboutLink = ({ url, children }) => (
  <Text style={style.link} onPress={() => Linking.openURL(url)}>
    {children}
  </Text>
)

AboutLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: childType
}

export const AboutText = ({ children }) => (
  <Text style={style.text}>{children}</Text>
)

AboutText.propTypes = {
  children: childType
}

export const AboutLabel = ({ children }) => (
  <Text style={style.label}>{children}</Text>
)
AboutLabel.propTypes = {
  children: childType
}
