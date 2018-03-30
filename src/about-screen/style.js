import { StyleSheet } from "react-native"
import { primaryColor } from "constants"

const itemStyle = {
  color: "white",
  marginBottom: 10
}

const aboutTextStyle = [
  itemStyle,
  {
    fontSize: 16
  }
]

export default StyleSheet.create({
  text: StyleSheet.flatten(aboutTextStyle),
  wrapper: {
    height: "100%",
    alignContent: "flex-start",
    backgroundColor: primaryColor,
    borderTopColor: "white",
    borderStyle: "solid",
    borderTopWidth: 2,
    paddingTop: 30
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  section: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15
  },
  title: StyleSheet.flatten([
    itemStyle,
    {
      fontSize: 18
    }
  ]),
  label: StyleSheet.flatten([
    itemStyle,
    {
      fontSize: 14
    }
  ]),
  link: StyleSheet.flatten([
    aboutTextStyle,
    { textDecorationLine: "underline" }
  ])
})
