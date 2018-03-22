import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Text, View, ScrollView, Linking, BackHandler } from "react-native"
import Toaster from "react-native-toaster"

import ActionTypes from "./actions/types"
import { viewList } from "./actions"
import { OMDB_URL } from "./constants"
import { appStyles } from "./styles"
import SearchBar from "components/search-bar"
import Show from "components/show"
import FilmList from "./film-list"
import FilmDetail from "film-detail"
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

const renderOmdbViewer = ({ view, toast, pageNum }) => (
  <ScrollView className="App" style={appStyles.wrapper}>
    <Toaster message={toast} />
    <Show when={view === ActionTypes.VIEW_FILM_LIST}>
      <View>
        {renderBanner()}
        <SearchBar />
        <FilmList />
      </View>
    </Show>
    <Show when={view === ActionTypes.VIEW_FILM_DETAIL}>
      <FilmDetail />
    </Show>
  </ScrollView>
)

export class omdbViewer extends React.Component {
  constructor(props) {
    super(props)
    this.onBackPress = this.onBackPress.bind(this)
  }

  onBackPress() {
    const { view, dispatchViewList } = this.props

    if (view === ActionTypes.VIEW_FILM_DETAIL) {
      dispatchViewList()
      return true
    }
    return false
  }

  componentDidMount() {
    const { view, dispatchViewList } = this.props

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
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  pageNum: PropTypes.number,
}

export default connect(
  state => ({
    view: state.view,
    toast: state.toast,
    pageNum: state.pageNum,
  }),
  dispatch => ({
    dispatchViewList: () => dispatch(viewList()),
  })
)(omdbViewer)
