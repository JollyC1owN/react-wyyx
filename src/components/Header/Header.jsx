import React, { Component } from 'react'
import { connect } from "react-redux"
import BScorll from 'better-scroll'
import './Header.styl'
class Header extends Component {
	state = {
		showNav: false  //标识导航列表是否显示
	}
	// 切换导航列表的显示和隐藏
	toggleShowNav = () => {
		this.setState({
			showNav: !this.state.showNav
		})
	}
	addClassName = (index) => {
		const liNodes = document.querySelectorAll('.header-nav-left li')
		for (let i = 0; i < liNodes.length; i++) {
			liNodes[i].className = ""
			if (index === i) {
				liNodes[i].className = "active"
			}
		}
	}
	addClassOn = (index) => {
		const liNodes = document.querySelectorAll('.ulNode li')
		for (let i = 0; i < liNodes.length; i++) {
			liNodes[i].className = ""
			if (index === i) {
				liNodes[i].className = "on"
			}
		}
	}
	componentDidMount () {
		// 能让上面的导航栏滑动
		new BScorll('.header-nav', {
			click: true,
			scrollX: true
		})
	}
	render () {
		let { push, navList } = this.props
		let { showNav } = this.state
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
				{
					showNav ? (<div className="navbox-wrapper">
						<div className="nav-box">
							<div className="all-category">
								<span>全部频道</span>
								<i className="iconfont icon-53" onClick={this.toggleShowNav}></i>
							</div>
							<ul className="ulNode">
								<li className="on" onClick={() => { this.addClassOn(0) }}>推荐</li>
								{
									navList.map((nav, index) => {
										return (
											<li key={index} onClick={() => { this.addClassOn(index + 1) }}>
												{nav.text}
											</li>
										)
									})
								}
							</ul>
							<div className="mask"></div>
						</div>
					</div>
					) : (<div className="header-nav">
						<ul className="header-nav-left">
							<li className="active" onClick={() => { this.addClassName(0) }}>推荐</li>
							{
								navList.map((item, index) => {
									return (
										<li key={index} onClick={() => { this.addClassName(index + 1) }}>{item.text}</li>
									)
								})
							}
						</ul>
						<span className="iconfont icon-54 header-nav-arrow" onClick={this.toggleShowNav}></span>
					</div>
						)
				}
			</header>
		)
	}
}

export default connect(state => ({ navList: state.homeNavList }))(Header)
