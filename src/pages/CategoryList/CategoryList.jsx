import React, { Component } from 'react'
import { Link, Route, Redirect ,Switch} from 'react-router-dom'
import './CategoryList.styl'
import Category from './Category/Category'
export default class CategoryList extends Component {
	componentWillMount () {
		this.props.getCategoryList()
	}
	addClass = (index) => {
		const liNodes = document.querySelectorAll('.categoryList-left ul li')
		for (let i = 0; i < liNodes.length; i++) {
			liNodes[i].className = ""
			if (index === i) {
				liNodes[i].className = "active"
			}
		}
	}
	render () {
		let { categoryList } = this.props

		return (
			<div className="categoryList-container">
				<div className="searchInput">
					<i className="iconfont icon-search"></i>
					<span className="placeholder" onClick={() => { this.props.history.push('/search') }}>搜索商品，共22717款好物</span>
				</div>
				<section className="categoryList-main">
					<div className="line"></div>
					<div className="categoryList-left">
						<ul>
							{
								categoryList.map((item, index) => {
									return (
										<li key={index} className={index === 0 ? "active" : ""} onClick={() => { this.addClass(index) }}>
											<Link to={`/categorylist/category/${item.id}`}>{item.name}</Link>
										</li>
									)
								})
							}
						</ul>
					</div>
					<Switch>
						<Route path='/categorylist/category/:id' component={Category} />
						<Redirect path="/categorylist" to="/categorylist/category/1022001"></Redirect></Switch>
				</section>
			</div>
		)
	}
}


