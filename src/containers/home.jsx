import { connect } from 'react-redux'
import Home from '../pages/Home/Home'
import { getHomeObj } from '../redux/actions'


export default connect(state => ({}), { getHomeObj })(Home)
