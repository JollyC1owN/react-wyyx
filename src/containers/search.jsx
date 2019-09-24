import { connect } from "react-redux"
import Search from "../pages/Search/Search"
import { searchResult, searchInit } from "../redux/actions.js"


export default connect(
	state => ({ searchResultArr: state.searchByText, searchInitArr: state.searchInit }),
	{ searchResult, searchInit }
)(Search)

