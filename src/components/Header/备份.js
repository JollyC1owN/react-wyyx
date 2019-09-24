<div className="navbox-wrapper">
	<div className="nav-box">
		<div className="all-category">
			<span>全部频道</span>
			<i className="iconfont icon-53" onClick="toggleShow"></i>
		</div>
		<ul className="ulNode">
			<li className="{on: activeIndex === recoIndex}" data-index="filterNavList.length" ref="recoLi" onClick="toggleActive()"><a href="javascript:void(0);">推荐</a></li>
			<li className="{on: activeIndex === index}" v-for="(nav, index) in filterNavList" key="index" onClick="toggleActive(index)">
				<a href="javascript:void(0);">{nav.text}</a>
			</li>
		</ul>
		<div className="mask"></div>
	</div>
</div>
