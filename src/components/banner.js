import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Icon } from "react-native-elements"
import { TouchableHighlight, Text, View, Linking } from "react-native"

import { appStyles as style } from "styles"
import { OMDB_URL } from "constants"
import { viewAbout } from "actions"

export const banner = ({ displayInfoIcon, dispatchViewAbout }) => (
  <View style={style.banner}>
    <Text style={style.title}>
      {"Search Open Movie Database"}&nbsp;
      <Text onPress={() => Linking.openURL(OMDB_URL)} style={style.link}>
        {"(OMDB)"}
      </Text>
    </Text>
    {displayInfoIcon && (
      <TouchableHighlight onPress={() => dispatchViewAbout()}>
        <Icon name={"info-outline"} color={"white"} />
      </TouchableHighlight>
    )}
  </View>
)

banner.propTypes = {
  displayInfoIcon: PropTypes.bool,
  dispatchViewAbout: PropTypes.func.isRequired,
}

banner.defaultProps = {
  displayInfoIcon: false,
}

export default connect(null, dispatch => ({
  dispatchViewAbout: () => dispatch(viewAbout()),
}))(banner)
