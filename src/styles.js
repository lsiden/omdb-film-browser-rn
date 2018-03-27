import { StyleSheet } from "react-native"

/* eslint-disable react-native/no-color-literals */

const white = "#fff"
const gray10 = "#aaa"
const messageColor = "#210d87"

export const PRIMARY_COLOR = "#05347f"

export const appStyles = StyleSheet.create({
  message: {
    fontSize: 14,
    color: messageColor,
    marginTop: 5,
  },
  banner: {
    backgroundColor: PRIMARY_COLOR,
    marginTop: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: white,
    fontSize: 16,
    marginBottom: 3,
  },
  link: {
    color: white,
    fontSize: 12,
  },
})

export const detailStyles = StyleSheet.create({
  titleWrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    flexWrap: "wrap",
    fontWeight: "bold",
    marginLeft: 10,
  },
  year: {
    fontSize: 16,
    color: gray10,
  },
  poster: {
    height: 300,
    marginBottom: 10,
  },
  plot: {
    color: "gray",
    marginLeft: 20,
  },
  plotUnavailable: {
    color: "gray",
    textAlign: "center",
  },
})

export const pagerStyles = StyleSheet.create({
  wrapper: {
    flex: 0,
    marginTop: 5,
    marginBottom: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline",
  },
  message: {
    textAlign: "center",
  },
})

export const fullScreenPosterStyles = StyleSheet.create({
  wrapper: {
    height: "98%",
    width: "100%",
  },
  poster: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
})

export const loadingIndicatorStyles = StyleSheet.create({
  wrapper: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
})

const itemStyle = {
  color: "white",
  marginBottom: 10,
}

const aboutTextStyle = [
  itemStyle,
  {
    fontSize: 16,
  },
]

export const aboutStyles = StyleSheet.create({
  text: StyleSheet.flatten(aboutTextStyle),
  wrapper: {
    height: "99%",
    alignContent: "flex-start",
    backgroundColor: PRIMARY_COLOR,
    marginTop: 5,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  section: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  title: StyleSheet.flatten([
    itemStyle,
    {
      fontSize: 18,
    },
  ]),
  label: StyleSheet.flatten([
    itemStyle,
    {
      fontSize: 14,
    },
  ]),
  link: StyleSheet.flatten([
    aboutTextStyle,
    { textDecorationLine: "underline" },
  ]),
})
