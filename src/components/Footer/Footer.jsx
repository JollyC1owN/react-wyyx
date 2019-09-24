import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.styl'
export default class Footer extends Component {
  render () {
    return (
      <div className="footerWrap">
        <NavLink to={'/home'} activeClassName="active" replace>
          <div className="footer-icon">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon" />
          </div>
          <span>首页</span>
        </NavLink>
        <NavLink to={'/categorylist'} activeClassName="active" replace>
          <div className="footer-icon" >
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon" />
          </div>
          <span>分类</span>
        </NavLink>
        <NavLink to={'/recommend'} activeClassName="active" replace>
          <div className="footer-icon">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon" />
          </div>
          <span>识物</span>
        </NavLink>

        <NavLink to={'/shopcart'} activeClassName="active" replace>
          <div className="footer-icon">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon" />
          </div>
          <span>购物车</span>
        </NavLink>
        <NavLink to={'/profile'} activeClassName="active" replace>
          <div className="footer-icon">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon" />
          </div>
          <span>个人</span>
        </NavLink>
      </div>
    )
  }
}
