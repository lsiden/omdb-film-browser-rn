/* eslint-disable react-native/no-color-literals */

import { StyleSheet } from "react-native"

const primaryColor = "#05347f"

export const appStyles = StyleSheet.create({
  wrapper: {
    flex: 0,
    marginTop: 20,
    backgroundColor: primaryColor,
    height: "100%"
  },
  message: {
    fontSize: 14,
    color: "lightgray"
  },
  messageWrapper: {
    marginTop: 5,
    marginLeft: 10
  },
  banner: {
    backgroundColor: primaryColor,
    marginTop: 5,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 16,
    marginBottom: 3
  },
  link: {
    color: "white",
    fontSize: 12
  }
})

export const detailStyles = StyleSheet.create({
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

export const pagerStyles = StyleSheet.create({
  wrapper: {
    flex: 0,
    marginTop: 5,
    marginBottom: 5
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "baseline"
  },
  message: {
    textAlign: "center"
  }
})

export const fullScreenPosterStyles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%"
  },
  poster: {
    flex: 1,
    height: undefined,
    width: undefined
  }
})

export const loadingIndicatorStyles = StyleSheet.create({
  wrapper: {
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
})

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

export const aboutStyles = StyleSheet.create({
  text: StyleSheet.flatten(aboutTextStyle),
  wrapper: {
    height: "99%",
    alignContent: "flex-start",
    backgroundColor: primaryColor,
    marginTop: 5
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
