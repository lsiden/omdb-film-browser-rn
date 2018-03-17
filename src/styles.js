import { StyleSheet } from "react-native"

export const white = "#fff"
export const gray8 = "#888"
export const gray2 = "#222"

export const detailStyles = StyleSheet.create({
  wrapperStyle: {
    marginLeft: "10pt",
  },
  headerStyle: {
    display: "flex",
    justifyContent: "space-between",
  },
  titleStyle: {
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  itemStyle: {
    fontSize: 12,
    color: gray8,
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
