import { StyleSheet } from "react-native"

export const white = "#fff"
export const gray8 = "#888"
export const gray2 = "#222"
export const bannerBackground = "#05347f"
export const TITLE_COLOR = "#210d87"

export const filmsList = StyleSheet.create({
  titleText: {
    lineHeight: 30,
    fontSize: 18,
  },
})

export const detailStyles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "baseline",
  },
  title: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 2,
    left: -6,
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
    fontSize: 24,
  },
})

export const filmListStyles = StyleSheet.create({
  msgStyle: {
    fontSize: 14,
    color: TITLE_COLOR,
    margin: 10,
  },
})

export const appStyles = {
  wrapper: {
    marginTop: 20,
    marginLeft: 10,
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
}
