import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Text, View, Linking } from "react-native"
import Toaster from "react-native-toaster"

import { Actions } from "./actions"
// import QueryForm from "./query-form"
// import FilmList from "./film-list"
import { filmDetail as FilmDetail } from "film-detail" // FIXME replace with default
import { OMDB_URL } from "./constants"
import { appStyles } from "./styles"
import Show from "components/show"

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
    {/*
      <QueryForm />
    */}
  </View>
)

export const omdbViewer = ({ view, toast }) => (
  <View className="App" style={appStyles.wrapper}>
    <Toaster message={toast} />
    {/*}
    <Show when={view === Actions.VIEW_FILM_LIST}>
      {renderBanner()}
      <FilmList />
    </Show>
    */}
    <Show when={view === Actions.VIEW_FILM_DETAIL}>
      <FilmDetail
        filmSummary={film0}
        filmDetails={filmDetails}
        dispatchViewList={dispatchViewList}
      />
    </Show>
  </View>
)

omdbViewer.propTypes = {
  view: PropTypes.string.isRequired,
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

export default connect(state => ({
  view: state.view,
  toast: state.toast,
}))(omdbViewer)
