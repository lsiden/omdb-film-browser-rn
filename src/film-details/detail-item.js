import React from "react"
import PropTypes from "prop-types"
import { Linking } from "react-native"
import { ListItem } from "react-native-elements"

import { detailStyles } from "styles"
import { detailExists } from "./detail-items"

const DetailItem = ({ detail }) => {
  const { text, cond = true, url = null } = detail

  if (!cond) {
    return null
  }
  const props = {
    style: detailStyles.item,
    title: text,
    hideChevron: true,
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
  detail: PropTypes.object.isRequired,
}

export default DetailItem
