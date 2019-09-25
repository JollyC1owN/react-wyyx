import React, { Component } from 'react'
import './Manufacturer.styl'
export default class Manufacturer extends Component {
	render () {
		return (
			<section className="manufacturer-container">
				<div className="manufacturer-header">
					<span>品牌制造商直供</span>
					<span className="more">更多
          <i className="iconfont icon-52"></i>
					</span>
				</div>
				<ul className="manufacturer-list">
					<li>
						<span>海外制造商</span>
						<span>9.9元起</span>
						<span>上新</span>
					</li>
					<li>
						<span>CK制造商</span>
						<span>32.9元起</span>
						<span>上新</span>
					</li>
					<li>
						<span>Nine West 制造商</span>
						<span>219元起</span>
					</li>
					<li>
						<span>新秀丽制造商</span>
						<span>34.9元起</span>
					</li>
				</ul>
			</section>
		)
	}
}

