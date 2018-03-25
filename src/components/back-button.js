import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-native-elements"

const icon = name => ({
  name,
  type: "material",
  size: 25,
  color: "black",
})

const style = { backgroundColor: "transparent", margin: 0, padding: 0 }

const BackButton = ({ dispatchToPrev }) => (
  <Button
    icon={icon("arrow-back")}
    onPress={dispatchToPrev}
    buttonStyle={style}
  />
)

BackButton.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default BackButton
