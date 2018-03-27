import { StyleSheet } from "react-native"

/* eslint-disable react-native/no-color-literals */

const white = "#fff"
const gray10 = "#aaa"
const bannerBackground = "#05347f"
const TITLE_COLOR = "#210d87"

export const appStyles = StyleSheet.create({
  message: {
    fontSize: 14,
    color: TITLE_COLOR,
    marginTop: 5,
  },
  link: {
    color: white,
    fontSize: 12,
  },
  banner: {
    backgroundColor: bannerBackground,
    padding: 10,
  },
  title: {
    color: white,
    fontSize: 18,
    marginBottom: 3,
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
    display: "flex",
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
