import React from "react"
import PropTypes from "prop-types"
import { Linking, Text } from "react-native"
import { ListItem } from "react-native-elements"

import style from "./style"
import { detailExists } from "./detail-items"
import { primaryColor } from "constants"

const DetailItem = ({ detail }) => {
  const { text, url = null } = detail

  const props = {
    title: <Text style={style.listItem}>{text}</Text>,
    containerStyle: { backgroundColor: primaryColor, padding: 8 }
  }

  if (detailExists(url)) {
    props.onPress = () => Linking.openURL(url)
  }
  return <ListItem {...props} />
}

DetailItem.propTypes = {
  detail: PropTypes.object.isRequired
}

export default DetailItem
