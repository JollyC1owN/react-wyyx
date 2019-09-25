import React, { Component } from 'react'
import BScroll from 'better-scroll'
import Header from '../../components/Header/Header'
import Swiper1 from './components/Swiper/Swiper'
import Nav from './components/Nav/Nav'
import Gift from './components/Gift/Gift'
import Split from '../../components/Split/Split'
import Manufacturer from './components/Manufacturer/Manufacturer'
import Popular from './components/Popular/Popular'
import Recommend from './components/Recommend/Recommend'
import FlashSale from './components/FlashSale/FlashSale'
import NewProducts from './components/NewProducts/NewProducts'
import Classify from './components/Classify/Classify'
import "./Home.styl"
export default class Home extends Component {
	componentDidMount () {
		this.props.getHomeObj()
		new BScroll('.home-main', { click: true })
	}
	render () {
		return (
			<div className="home-container">
				<Header push={this.props} />  {/**头部 */}
				<div className="home-main">
					{/**加一padding解决scroll回弹下落页面显示不完整的问题*/}
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
						<Nav />   {/*主导航区*/}
						<Gift />  {/**福利区*/}
						<Split />
						<Manufacturer /> {/*品牌制造商区 */}
						<Split />
						<Popular /> {/**热销榜单区 */}
						<Split />
						<Recommend />{/**人气推荐 */}
						<Split />
						<FlashSale />{/**限时购 */}
						<Split />
						<NewProducts />{/**新品推荐 */}
						<Split />
						<Classify />{/** */}
					</div>
				</div>
			</div>
		)
	}
}
