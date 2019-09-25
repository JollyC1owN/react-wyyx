import React, { Component } from 'react'
import './Gift.styl'
export default class Gift extends Component {
	render () {
		return (
			<section className="gift-container">
				<p className="name">- 新人专享礼 -</p>
				<div className="gift-box">
					<div className="gift-left">
						<span>新人专享礼包</span>
						<img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="新人专享礼包" />
					</div>
					<div className="gift-right">
						<div className="gift-right-top">
							<div className="title">
								<p>福利社</p>
								<span>今日特价</span>
							</div>
							<img src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="福利社" />
						</div>
						<div className="gift-right-bottom">
							<div className="title">
								<p>新人拼团</p>
								<span>1元起包邮</span>
							</div>
							<img src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="新人拼团" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
