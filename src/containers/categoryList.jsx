import { connect } from 'react-redux'
import { getCategoryList } from '../redux/actions'
import CategoryList from '../pages/CategoryList/CategoryList'


export default connect(
	state => ({ categoryList: state.sortCateList }),
	{ getCategoryList }
)(CategoryList)
