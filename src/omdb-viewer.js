import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View, ScrollView, BackHandler } from "react-native"
import Toaster from "react-native-toaster"

import ActionTypes from "./actions/types"
import { viewFilmDetails, viewFilmList, updateIsFetching } from "./actions"
import SearchBar from "components/search-bar"
import FilmList from "./film-list"
import FilmDetails from "film-details"
import FullScreenPoster from "full-screen-poster"
import Banner from "components/banner"
import About from "./about"
import { appStyles as style } from "./styles"

const FilmListScreen = () => (
  <ScrollView>
    <Banner displayInfoIcon={true} />
    <SearchBar />
    <FilmList />
  </ScrollView>
)

const renderActiveView = screen => {
  switch (screen) {
    case ActionTypes.VIEW_FILM_LIST:
      return <FilmListScreen />
    case ActionTypes.VIEW_FILM_DETAILS:
      return <FilmDetails />
    case ActionTypes.VIEW_POSTER:
      return <FullScreenPoster />
    case ActionTypes.VIEW_ABOUT:
      return <About />
    default:
      return null
  }
}

const renderOmdbViewer = ({ screen, toast }) => (
  <View style={style.wrapper}>
    <Toaster message={toast} />
    {renderActiveView(screen)}
  </View>
)

renderOmdbViewer.propTypes = {
  screen: PropTypes.bool,
  toast: PropTypes.func,
}

export class omdbViewer extends React.Component {
  constructor(props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
  }

  onBackPress() {
    const { screen, dispatchViewList, dispatchViewFilmDetails } = this.props
    const backActionDict = {
      [ActionTypes.VIEW_POSTER]: dispatchViewFilmDetails,
      [ActionTypes.VIEW_FILM_DETAILS]: dispatchViewList,
      [ActionTypes.VIEW_ABOUT]: dispatchViewList,
    }
    const backAction = screen && backActionDict[screen]

    if (backAction) {
      backAction.call(null)
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
  screen: PropTypes.string.isRequired,
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  dispatchViewList: PropTypes.func.isRequired,
  dispatchViewFilmDetails: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    screen: state.screen,
    toast: state.toast,
  }),
  dispatch => ({
    dispatchViewList: () => {
      dispatch(viewFilmList())
      dispatch(updateIsFetching(false))
    },
    dispatchViewFilmDetails: () => dispatch(viewFilmDetails()),
  })
)(omdbViewer)
