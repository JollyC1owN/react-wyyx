import React, { Component } from 'react'
import { connect } from 'react-redux'
import './NewProducts.styl'
class NewProducts extends Component {
	render () {
		let { newList } = this.props
		let getNewList = newList.splice(2, 7)
		return (
			<section className="products-container">
				<div className="products-header">
					<div className="header-top">
						<span>新品首发</span>
					</div>
					<span className="header-bottom">
						更多
					<i className="iconfont icon-52"></i>
					</span>
				</div>
				<ul className="products-list">
					{
						getNewList.map((item, index) => {
							return (
								<li key={index}>
									<img src={item.listPicUrl} alt="新品首发" />
									<div className="good-name">
										<span>{item.name}</span>
										<span className="good-price">￥{item.counterPrice}</span>
									</div>
								</li>
							)
						})
					}
				</ul>
			</section>
		)
	}
}

export default connect(state => ({ newList: state.homeNewList }))(NewProducts)
