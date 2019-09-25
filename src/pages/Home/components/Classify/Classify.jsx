import React, { Component } from 'react'
import { connect } from 'react-redux'
import BScroll from 'better-scroll'
import './Classify.styl'
class Classify extends Component {
	_setUlWidth = () => {
		const uls = document.querySelectorAll('.ul-node')
		let ulWidth
		Array.from(uls).forEach((ul, index) => {
			const lis = ul.querySelectorAll('li')
			Array.from(lis).forEach((li, index) => {
				const width = li.clientWidth * lis.length + 20 * (lis.length - 1)
				ulWidth = width
			})
			ul.style.width = ulWidth + 'px'
		})
	}
	_initScroll = () => {
		/* eslint-disable no-new */
		const classifyList = document.querySelectorAll('.classify-list');
		Array.from(classifyList).forEach((classify, index) => {
			new BScroll(classify, {
				click: true,
				scrollX: true
			})
		})
	}
	componentDidUpdate () {
		this._setUlWidth()
		this._initScroll()
	}

	render () {
		let { classifyList } = this.props
		return (
			<section>
				{
					classifyList.map((classify, index) => {
						return (
							<div className="classify-container" key={index}>
								<img src={classify.titlePicUrl} alt="标题图片" />
								<div className="classify-list">
									<ul className="ul-node">
										{
											classify.itemList.map((item, index) => {
												return (
													<li key={index}>
														<img src={item.listPicUrl} alt="商品图片" />
														<div className="good-info">
															<span className="good-name">{item.name}</span>
															<span className="good-price">￥{item.counterPrice}</span>
														</div>
													</li>
												)
											})
										}
									</ul>
								</div>
							</div>
						)
					})
				}
			</section>

		)
	}
}
export default connect(state => ({ classifyList: state.homeCateList }))(Classify)
