import React, { Component } from 'react'

export default class Home extends Component {
	render () {
		return (
			<div class="home-container">
				<Header />  {/**头部 */}
				<div class="home-main">
					{/**<!--加一padding解决scroll回弹下落页面显示不完整的问题--> */}
					<div style="padding-bottom: 260px">
						<Swiper ref="swiper" />  {/**轮播图部分 */}
						<ul class="wangyi-grow">
							<li>
								<i class="grow-icon"></i>
								<span>网易自营品牌</span>
							</li>
							<li>
								<i class="grow-icon"></i>
								<span>30天无忧退货</span>
							</li>
							<li>
								<i class="grow-icon"></i>
								<span>48小时快速退款</span>
							</li>
						</ul>
						<Nav />   {/**首页主导航区*/}
						<Gift />  {/** 首页福利区*/}
						<Split />
						<Manufacturer /> {/**首页品牌制造商区 */}
						<Split />
						<Popular /> {/** 首页热销榜单区*/}
						<Split />
						<Recommend />
						<Split />
						<FlashSale />
						<Split />
						<NewProducts />
						<Split />
						<Classify />
					</div>
				</div>
			</div>
		)
	}
}
