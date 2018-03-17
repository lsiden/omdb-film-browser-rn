import React from "react"
import PropTypes from "prop-types"

import ButtonLink from "./button-link"

const CLOSE_ICON = "\u2715"

const closeButtonStyle = {
  margin: "8pt",
  fontSize: "20pt",
}

export const CloseButton = ({ onPress }) => (
  <ButtonLink
    onPress={onPress}
    id="close-button"
    title="Close"
    addStyle={closeButtonStyle}
  >
    {CLOSE_ICON}
  </ButtonLink>
)

CloseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default CloseButton
