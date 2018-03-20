import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Text, View, ScrollView, Linking } from "react-native"
import Toaster from "react-native-toaster"

import { Actions } from "./actions"
import { filmDetail as FilmDetail } from "film-detail" // FIXME replace with default
import { filmList as FilmList } from "film-list" // FIXME replace with default
import { OMDB_URL } from "./constants"
import { appStyles } from "./styles"
import SearchBar from "components/search-bar"
import Show from "components/show"
// import FilmList from "./film-list"

// FIXME remove
const films = require("__test__/__fixture__/films.json").Search
const filmDetails = require("__test__/__fixture__/film-detail.json")
const film0 = films[4]
const dispatchViewList = () => {}

const openUrl = url => Linking.openURL(url)

const renderBanner = () => (
  <View style={appStyles.banner}>
    <Text style={appStyles.title}>
      {"Search Open Movie Database"}&nbsp;
      <Text onPress={() => openUrl(OMDB_URL)} style={appStyles.link}>
        {"(OMDB)"}
      </Text>
    </Text>
  </View>
)

export const omdbViewer = ({ view, toast }) => (
  <ScrollView className="App" style={appStyles.wrapper}>
    <Toaster message={toast} />
    <Show when={view === Actions.VIEW_FILM_LIST}>
      <View>
        {renderBanner()}
        <SearchBar />
        <FilmList films={films} />
      </View>
    </Show>
    <Show when={view === Actions.VIEW_FILM_DETAIL}>
      <FilmDetail
        filmSummary={film0}
        filmDetails={filmDetails}
        dispatchViewList={dispatchViewList}
      />
    </Show>
  </ScrollView>
)

omdbViewer.propTypes = {
  view: PropTypes.string.isRequired,
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export default connect(
  state => ({
    view: state.view,
    toast: state.toast,
  }),
  dispatch => ({
    dispatchViewList: () => dispatch(viewList()),
  })
)(omdbViewer)
