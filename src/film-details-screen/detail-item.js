import React from "react"
import PropTypes from "prop-types"
import { Linking, Text } from "react-native"
import { ListItem } from "react-native-elements"

import style from "./style"
import { detailExists } from "./detail-items"

const DetailItem = ({ detail }) => {
  const { text, cond = true, url = null } = detail

  if (!cond) {
    return null
  }
  const props = {
    title: <Text style={style.listItem}>{text}</Text>,
    hideChevron: true
  }

  if (detailExists(url)) {
    props.onPress = () => {
      Linking.openURL(url)
    }
    props.hideChevron = false
  }
  return <ListItem {...props} />
}

DetailItem.propTypes = {
  detail: PropTypes.object.isRequired
}

export default DetailItem
