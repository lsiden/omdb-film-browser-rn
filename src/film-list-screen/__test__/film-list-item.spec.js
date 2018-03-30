import React from "react"
import renderer from "react-native-test-utils"

import FilmListItem from "../film-list-item"

const films = require("__test__/__fixture__/films.json").Search

const defaultProps = () => ({
  filmSummary: films[0],
  onPress: () => {}
})

const createWrapper = () => renderer(<FilmListItem {...defaultProps()} />)

it("renders", () => {
  const wrapper = createWrapper({ isFetching: false })
  expect(wrapper.toJSON()).toMatchSnapshot()
})
