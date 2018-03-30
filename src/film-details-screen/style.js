import { StyleSheet } from "react-native"
import { primaryColor } from "constants"

export default StyleSheet.create({
  titleWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 8
  },
  title: {
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    marginLeft: 10,
    color: "white"
  },
  wrapper: {
    backgroundColor: primaryColor,
    padding: 10
  },
  year: {
    fontSize: 16,
    color: "lightgray"
  },
  poster: {
    height: 300,
    marginBottom: 10
  },
  plot: {
    color: "darkgray",
    marginLeft: 20
  },
  plotUnavailable: {
    color: "darkgray",
    textAlign: "center"
  }
})
