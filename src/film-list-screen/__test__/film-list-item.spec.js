import React from "react"
import renderer from "react-native-test-utils"

jest.mock("abort-controller")

import { filmListItem as FilmListItem } from "../film-list-item"

const films = require("__fixture__/films.json").Search

const defaultProps = () => ({
  filmSummary: films[0],
  dispatchFetchFilmDetails: () => {},
  navigateToDetailsScreen: () => {}
})

const createWrapper = () => renderer(<FilmListItem {...defaultProps()} />)

it("renders", () => {
  const wrapper = createWrapper({ isFetching: false })
  expect(wrapper.toJSON()).toMatchSnapshot()
})
