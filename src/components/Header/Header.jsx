import React, { Component } from 'react'
import './Header.styl'
export default class Header extends Component {


	render () {
		let { push } = this.props
		return (
			<header className="header-container">
				<div className="header-search-login">
					<span className="logo"></span>
					<div className="searchInput" onClick={() => { push.history.push('/search') }}>
						<i className="iconfont icon-search"></i>
						<span className="placeholder">搜索商品，共22717款好物</span>
					</div>
					<button onClick={() => { push.history.push('/profile') }}>登录</button>
				</div>
				<div className="header-nav">
					<ul className="header-nav-left">
						<li className="active" ><a href="#2">推荐</a></li>
						<li className=""><a href="#1">手机电脑</a></li>
					</ul>
					<span className="iconfont icon-54 header-nav-arrow"></span>
				</div>

			</header>
		)
	}
}
