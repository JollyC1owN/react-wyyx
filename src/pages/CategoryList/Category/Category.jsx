import React, { Component } from 'react'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import './Category.styl'
class Category extends Component {
	componentDidMount () {
		new BScroll('.category-container', {
			click: true
		})
	}
	render () {
		let { categoryList } = this.props
		let idNum = this.props.match.params.id
		let category = categoryList.find((item) => {
			// item.id是number    id是字符串类型
			return item.id === idNum * 1
		})
		let shopArr = category.subCateList
		return (
			<div className="category-container">
				<div className="category-main">
					<img className="category-bigImg" src={category.bannerUrl} alt={category.name} />
					<ul>
						{
							shopArr.map((item, index) => {
								return (
									<li key={index} >
										<img src={item.bannerUrl} alt={category.name} />
										<span>{item.name}</span>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(state => ({ categoryList: state.sortCateList }))(Category)
