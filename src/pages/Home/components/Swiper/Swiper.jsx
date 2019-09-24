import React, { Component } from 'react'
import 'swiper/css/swiper.min.css'
import Swiper from 'swiper'
import './Swiper.styl'
export default class Swiper1 extends Component {
	componentDidMount () {
		this._initSwiper()
	}
	_initSwiper = () => {
		/* eslint-disable no-new */
		new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			autoplay: true, // 自动轮播
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				type: 'custom',
				renderCustom: function (swiper, current, total) {
					let customPaginationHtml = '';
					for (let i = 0; i < total; i++) {
						// 判断哪个分页器此刻应该被激活
						if (i === current - 1) {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
						} else {
							customPaginationHtml +=
								'<span class="swiper-pagination-customs"></span>';
						}
					}
					//              return '<span class="swiperPag">' + customPaginationHtml + '</span>';
					return customPaginationHtml;
				}
			}
		});
	}
	render () {
		return (
			<div className="page">
				<div className="swiper-container">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/f00ff1a6f9e244efe43c77ee8331318f.jpg" alt="实时热销top100" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg" alt="2019新品发布会" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/5e658f72294572822b65e09113ac4311.jpg" alt="愚人不如悦己" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/ea5fde8d19b12c0e252365e713520cd6.jpg" alt="福利站" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/d8645b184bb0b7c9e471d9212d283939.jpg" alt="春季四件套换新" />
						</div>
						<div className="swiper-slide">
							<img src="https://yanxuan.nosdn.127.net/3c6358daba8bca7169b0dd2a49df188c.jpg" alt="护理好物集" />
						</div>
					</div>
					<div className="swiper-pagination"></div>
				</div>
			</div>
		)
	}
}
