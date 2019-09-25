import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Recommend.styl'
class Recommend extends Component {
	render () {
		let { popularItems } = this.props
		let getPopularItems = popularItems.splice(1, 4)
		return (
			<section className="reco-container">
				<div className="reco-header">
					<span>人气推荐</span>
					<span>
						更多
					<i className="iconfont icon-52"></i>
					</span>
				</div>
				<div className="reco-list">
					<div className="reco-list-top">
						<img src={popularItems[0].listPicUrl} alt="好物推荐" />
						<div className="good-info">
							<span>APP特惠</span>
							<p className="ellipsis">{popularItems[0].name}</p>
							<p className="ellipsis">{popularItems[0].simpleDesc}</p>
							<p>￥{popularItems[0].counterPrice}</p>
						</div>
					</div>
					<ul className="reco-list-bottom">
						{
							getPopularItems.map((item, index) => {
								return (
									<li key={index}>
										<img src={item.listPicUrl} alt="商品图" />
										<div className="good-name">
											<span>{item.name}</span>
											<span className="good-price">￥{item.counterPrice}</span>
										</div>
									</li>
								)
							})
						}
					</ul>
				</div>
				{/**
				<div className="good-advantage" >
								<span>爆品</span>
								<span>限时购</span>
							</div>
							<div className="good-full-reduction">
								<div>
									<span className="half-circle"></span>
									<span>每满99减10券</span>
									<span className="half-circle"></span>
								</div>
							</div>
				*/}
			</section>
		)
	}
}

export default connect(state => ({ popularItems: state.homePopularList }))(Recommend)
