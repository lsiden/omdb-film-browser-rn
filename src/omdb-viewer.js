import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Text, View, Linking, BackHandler } from "react-native"
import Toaster from "react-native-toaster"

import ActionTypes from "./actions/types"
import { viewFilmDetails, viewList, updateIsFetching } from "./actions"
import { OMDB_URL } from "./constants"
import { appStyles } from "./styles"
import SearchBar from "components/search-bar"
import FilmList from "./film-list"
import FilmDetails from "film-details"
import FullScreenPoster from "full-screen-poster"

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

const renderFilmList = () => (
  <View>
    {renderBanner()}
    <SearchBar />
    <FilmList />
  </View>
)

const renderActiveView = view => {
  switch (view) {
    case ActionTypes.VIEW_FILM_LIST:
      return renderFilmList()
    case ActionTypes.VIEW_FILM_DETAILS:
      return <FilmDetails />
    case ActionTypes.VIEW_POSTER:
      return <FullScreenPoster />
    default:
      return null
  }
}

const appStyle = {
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
}

const renderOmdbViewer = ({ view, toast }) => (
  <View style={appStyle}>
    <Toaster message={toast} />
    {renderActiveView(view)}
  </View>
)

renderOmdbViewer.propTypes = {
  view: PropTypes.bool,
  toast: PropTypes.func,
}

export class omdbViewer extends React.Component {
  constructor(props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
  }

  onBackPress() {
    const { view, dispatchViewList, dispatchViewFilmDetails } = this.props

    if (view === ActionTypes.VIEW_FILM_DETAILS) {
      dispatchViewList()
      return true
    }

    if (view === ActionTypes.VIEW_POSTER) {
      dispatchViewFilmDetails()
      return true
    }
    return false
  }

  componentDidMount() {
    this.backPressListener = BackHandler.addEventListener(
      "hardwareBackPress",
      this.onBackPress
    )
  }

  componentWillUnmount() {
    if (this.backPressListener) {
      BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
    }
  }

  render() {
    return renderOmdbViewer(this.props)
  }
}

omdbViewer.propTypes = {
  view: PropTypes.string.isRequired,
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  dispatchViewList: PropTypes.func.isRequired,
  dispatchViewFilmDetails: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    view: state.view,
    toast: state.toast,
  }),
  dispatch => ({
    dispatchViewList: () => {
      dispatch(updateIsFetching(false))
      dispatch(viewList())
    },
    dispatchViewFilmDetails: () => dispatch(viewFilmDetails()),
  })
)(omdbViewer)
