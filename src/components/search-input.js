import React from "react"
import PropTypes from "prop-types"
import { View, Text, TextInput } from "react-native"

export const SEARCH_ICON = "\u26b2"

const wrapperStyle = {
  position: "relative",
  flex: "1 1",
}

const inputStyle = {
  height: 24,
  width: "95%",
  marginLeft: 24,
  marginTop: 4,
  fontSize: 12,
}

const iconStyle = {
  position: "absolute",
  top: 3,
  left: 6,
  color: "#888",
  fontSize: 20,
  transform: [{ rotate: "-45deg" }],
}

export const SearchInput = props => {
  const { addStyle, ...passProps } = props
  const style = { ...wrapperStyle, ...addStyle }
  return (
    <view style={style}>
      <Text
        style={iconStyle}
        charSet="utf-8"
        dangerouslySetInnerHTML={{ __html: SEARCH_ICON }}
      />
      <TextInput style={inputStyle} {...passProps} />
    </view>
  )
}

SearchInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  addStyle: PropTypes.object,
}

SearchInput.defaultProps = {
  placeholder: "",
  addStyle: {},
}

export default SearchInput
