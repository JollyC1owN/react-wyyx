import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FlashSale.styl'
class FlashSale extends Component {
	render () {
		let { timeList } = this.props
		return (
			<section className="time-container">
				<div className="time-header">
					<div className="header-top">
						<span>限时购</span>
						<div className="time-down">
							<span ref="timeHour">00</span>
							<span>:</span>
							<span ref="timeMinute">00</span>
							<span>:</span>
							<span ref="timeSecond">00</span>
						</div>
					</div>
					<span className="header-bottom">
						更多
					<i className="iconfont icon-52"></i>
					</span>
				</div>
				<ul className="time-list">
					{
						timeList.map((item, index) => {
							return (
								<li key={index}>
									<img src={item.picUrl} alt="限时购" />
									<div className="good-price">
										<span className="new-price">￥{item.activityPrice}</span>
										<span className="old-price">￥{item.originPrice}</span>
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

export default connect(state => ({ timeList: state.homeTimeList }))(FlashSale)
