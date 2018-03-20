import { StyleSheet } from "react-native"

export const white = "#fff"
export const gray8 = "#888"
export const gray2 = "#222"
export const buttonBackground = "#8cb8ff"

export const detailStyles = StyleSheet.create({
  wrapperStyle: {
    marginLeft: 10,
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "baseline",
  },
  titleStyle: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 2,
  },
  itemStyle: {
    fontSize: 16,
  },
  posterStyle: {
    height: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    fontSize: 24,
  },
})

export const appStyles = {
  linkStyle: {
    color: white,
    fontSize: 12,
  },
  headerStyle: {
    backgroundColor: gray2,
    padding: 10,
  },
  titleStyle: {
    color: white,
    fontSize: 18,
    marginBottom: 18,
  },
}
