/* eslint-disable react-native/no-color-literals */

import { StyleSheet } from "react-native"

export const primaryColor = "#05347f"

export const appStyles = StyleSheet.create({
  message: {
    fontSize: 14
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
  },
  item: {
    backgroundColor: "lightblue"
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
  poster: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignItems: "flex-start"
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
