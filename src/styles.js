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
  scrollWrapper: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
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
  searchWrapper: {
    backgroundColor: bannerBackground,
  },
})

export const detailStyles = StyleSheet.create({
  header: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "baseline",
  },
  titleWrapper: {
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
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
  item: {
    fontSize: 16,
  },
  poster: {
    height: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    flex: 0,
    fontSize: 24,
  },
  plotUnavailable: {
    color: "gray",
    textAlign: "center",
  },
  plot: {
    color: "gray",
    marginLeft: 30,
  },
})

export const pagerStyles = StyleSheet.create({
  wrapper: {
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
  posterStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  wrapperStyle: {
    height: "98%",
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  },
  backButtonStyle: {
    marginLeft: 20,
  },
  backButtonWrapperStyle: {
    marginLeft: 20,
  },
})

export const loadingIndicatorStyles = StyleSheet.create({
  wrapper: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
})
