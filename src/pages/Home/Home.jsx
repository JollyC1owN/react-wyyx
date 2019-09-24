import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Swiper1 from './components/Swiper/Swiper'
import "./Home.styl"
export default class Home extends Component {
	render () {
		return (
			<div className="home-container">
				<Header push={this.props} />  {/**头部 */}
				<div className="home-main">
					{/**<!--加一padding解决scroll回弹下落页面显示不完整的问题--> */}
					<div style={{ paddingBottom: 260 }}>
						<Swiper1 ref="swiper" />  {/**轮播图部分 */}
						<ul className="wangyi-grow">
							<li>
								<i className="grow-icon"></i>
								<span>网易自营品牌</span>
							</li>
							<li>
								<i className="grow-icon"></i>
								<span>30天无忧退货</span>
							</li>
							<li>
								<i className="grow-icon"></i>
								<span>48小时快速退款</span>
							</li>
						</ul>

					</div>
				</div>
			</div >
		)
	}
}
