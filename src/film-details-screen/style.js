import { StyleSheet } from "react-native"
import { primaryColor } from "constants"

export default StyleSheet.create({
  outerWrapper: {
    backgroundColor: primaryColor,
    flex: 1
  },
  wrapper: {
    padding: 10,
    paddingBottom: 10
  },
  titleWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 10
  },
  title: {
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    marginLeft: 10,
    color: "white"
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
  },
  listItem: {
    color: "white"
  }
})
