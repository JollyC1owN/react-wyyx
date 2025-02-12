/* 
	包含多个reducer的模块
*/
import { combineReducers } from "redux"

import {
	SEARCH_RESULT,
	SEARCH_INIT,
	HOME_NAVLIST,
	HOME_POPULLIST,
	HOME_TIMELIST,
	HOME_NEWLIST,
	HOME_CATELIST,
	SORT_CATELIST
} from "./action-types"

// 输入后搜索返回的结果状态
function searchByText (state = [], action) {
	switch (action.type) {
		case SEARCH_RESULT:
			return action.data
		default:
			return state
	}
}
// 搜索页面初始化状态
function searchInit (state = [], action) {
	switch (action.type) {
		case SEARCH_INIT:
			return action.data
		default:
			return state
	}
}
// 获取home页面的nav组件需要数据状态
function homeNavList (state = [], action) {
	switch (action.type) {
		case HOME_NAVLIST:
			return action.data
		default:
			return state
	}
}

/////////////////////////////////////////////////////////////////////

// 获取home页面的nav组件需要数据状态
function homePopularList (state = [{}], action) {
	switch (action.type) {
		case HOME_POPULLIST:
			return action.data
		default:
			return state
	}
}
// 获取home页面限时购要数据状态
function homeTimeList (state = [{}], action) {
	switch (action.type) {
		case HOME_TIMELIST:
			return action.data
		default:
			return state
	}
}
// 获取home页面新品首发要数据状态
function homeNewList (state = [{}], action) {
	switch (action.type) {
		case HOME_NEWLIST:
			return action.data
		default:
			return state
	}
}
// 获取home页面拉杆箱要数据状态
function homeCateList (state = [{ itemList: [] }], action) {
	switch (action.type) {
		case HOME_CATELIST:
			return action.data
		default:
			return state
	}
}

/////////////////////////////////////////////////////////////////////
let initArr = [
	{
		"showIndex": 16,
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png",
		"type": 1,
		"frontName": "",
		"wapExpandPicTargetUrl": "https://m.you.163.com/topic/v1/pub/0b7W5FRSSj.html",
		"superCategoryId": 0,
		"extra": {
			"adminResource": {
				"dataType": 1,
				"comment": "新年红"
			},
			"modelType": 4
		},
		"name": "推荐专区",
		"id": 1022001,
		"subCateList": [
			{
				"showIndex": 291,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"type": 3,
				"frontName": "来自网易CEO丁磊的好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "丁磊的好货推荐",
				"id": 1031001,
				"subCateList": []
			},
			{
				"showIndex": 290,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"type": 3,
				"frontName": "这些商品都是999+的好评",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "999+好评",
				"id": 1040031,
				"subCateList": []
			},
			{
				"showIndex": 289,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"type": 3,
				"frontName": "这些商品常常上热搜",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "大家都在搜",
				"id": 109237000,
				"subCateList": []
			},
			{
				"showIndex": 288,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装低至5折",
				"id": 109239002,
				"subCateList": []
			},
			{
				"showIndex": 287,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋靴特惠",
				"id": 109239001,
				"subCateList": []
			},
			{
				"showIndex": 286,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"type": 3,
				"frontName": "活动时间;1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "日用好物低至7折",
				"id": 109239004,
				"subCateList": []
			},
			{
				"showIndex": 285,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "收纳好物低至6折",
				"id": 109239003,
				"subCateList": []
			},
			{
				"showIndex": 284,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "母婴低至6折",
				"id": 109239000,
				"subCateList": []
			},
			{
				"showIndex": 283,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"type": 3,
				"frontName": "为家打造新气象",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新气象",
				"id": 109237001,
				"subCateList": []
			},
			{
				"showIndex": 281,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"type": 3,
				"frontName": "办个热闹的火锅轰趴",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "跨年火锅轰趴",
				"id": 109237002,
				"subCateList": []
			},
			{
				"showIndex": 280,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"type": 3,
				"frontName": "送父母一份暖心的礼物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "新年送爸妈",
				"id": 109237004,
				"subCateList": []
			},
			{
				"showIndex": 276,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"type": 3,
				"frontName": "元旦出游必备好物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "元旦出游攻略",
				"id": 109237008,
				"subCateList": []
			},
			{
				"showIndex": 275,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"type": 3,
				"frontName": "远离雾霾，享受纯净空气",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "除霾好物",
				"id": 109237009,
				"subCateList": []
			},
			{
				"showIndex": 274,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"type": 3,
				"frontName": "开启舒适懒人模式",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人专属定制",
				"id": 109228015,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 15,
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/30d7e2389002d56e82b7e46a0babd9d2.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/c2177e6f9c8bd1367745605df9723001.png",
		"type": 1,
		"frontName": "",
		"wapExpandPicTargetUrl": "https://m.you.163.com/topic/v1/pub/EtTQ6YitkX.html",
		"superCategoryId": 0,
		"extra": {
			"adminResource": {
				"dataType": 1,
				"comment": "日用家清"
			},
			"modelType": 4
		},
		"name": "冬季专区",
		"id": 109224000,
		"subCateList": [
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "品质生活全球购",
				"id": 109229007,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "办公室贪嘴小食",
				"id": 109229008,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季出游精选",
				"id": 109226014,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "保暖家居服",
				"id": 109226013,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "拒绝秋冬贴膘",
				"id": 109226012,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季温暖家电",
				"id": 109224009,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日舒适床品",
				"id": 109224001,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人方便速食",
				"id": 109224008,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季祛寒茶饮",
				"id": 109224007,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "萌宝初冬新装",
				"id": 109224006,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "男士冬季新装",
				"id": 109224005,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "女士冬季新装",
				"id": 109224004,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "干季滋润护理",
				"id": 109224003,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日暖心配饰",
				"id": 109224002,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 13,
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/19a5c9cc21979e472bba2e79067a94ca.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/b1843465447a45cb2f7fb99cb140db12.png",
		"type": 1,
		"frontName": "",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank",
		"superCategoryId": 0,
		"extra": {
			"adminResource": {
				"dataType": 1,
				"comment": "百强榜"
			},
			"modelType": 4
		},
		"name": "爆品专区",
		"id": 1087004,
		"subCateList": [
			{
				"showIndex": 19,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"type": 3,
				"frontName": "居家爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "床品家装",
				"id": 109221009,
				"subCateList": []
			},
			{
				"showIndex": 18,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"type": 3,
				"frontName": "配件爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "箱包配件",
				"id": 109221008,
				"subCateList": []
			},
			{
				"showIndex": 17,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"type": 3,
				"frontName": "服装爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "经典服饰",
				"id": 109221007,
				"subCateList": []
			},
			{
				"showIndex": 16,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"type": 3,
				"frontName": "电器爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器数码",
				"id": 109221006,
				"subCateList": []
			},
			{
				"showIndex": 15,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"type": 3,
				"frontName": "洗护爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护美妆",
				"id": 109221005,
				"subCateList": []
			},
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"type": 3,
				"frontName": "饮食爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "零食酒水",
				"id": 109221004,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"type": 3,
				"frontName": "餐厨爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "厨房杂货",
				"id": 109221003,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"type": 3,
				"frontName": "婴童爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童用品",
				"id": 109221002,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"type": 3,
				"frontName": "文体区爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体周边",
				"id": 109221001,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"type": 3,
				"frontName": "海外制造、网易子品牌推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "海外特色",
				"id": 109221000,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 12,
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/1b1b6419309cf0c9c0ea71b1246bb703.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/60ee2d259be8e1fb5d9e1178cb3d0b6a.png",
		"type": 1,
		"frontName": "",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/newItemRank",
		"superCategoryId": 0,
		"extra": {
			"adminResource": {
				"dataType": 1,
				"comment": "新品榜"
			},
			"modelType": 4
		},
		"name": "新品专区",
		"id": 109217021,
		"subCateList": [
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"type": 3,
				"frontName": "居家新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新品",
				"id": 109217022,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "鞋包配饰新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋包配饰新品",
				"id": 109217023,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"type": 3,
				"frontName": "服装新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装新品",
				"id": 109217024,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"type": 3,
				"frontName": "电器新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器新品",
				"id": 109217025,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"type": 3,
				"frontName": "饮食新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "饮食新品",
				"id": 109217027,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"type": 3,
				"frontName": "餐厨新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "餐厨新品",
				"id": 109217028,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"type": 3,
				"frontName": "洗护新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护新品",
				"id": 109217026,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"type": 3,
				"frontName": "文体新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体新品",
				"id": 109217030,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"type": 3,
				"frontName": "婴童新品好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童新品",
				"id": 109217029,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "特色区新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "特色区新品",
				"id": 109217031,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 1,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/b9adb368aea5d3d05644ecac85d358d5.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/761877bc4e2cf50d7c424a8a7e6378bf.jpg",
		"frontDesc": "回家，放松身心",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/f0d0e1a542e2095861b42bf789d948ce.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/topic/v1/pub/OTtgutDnWz.html",
		"superCategoryId": 0,
		"name": "居家",
		"iconUrl": "http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png",
		"id": 1005000,
		"subCateList": [
			{
				"showIndex": 291,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"type": 3,
				"frontName": "来自网易CEO丁磊的好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "丁磊的好货推荐",
				"id": 1031001,
				"subCateList": []
			},
			{
				"showIndex": 290,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"type": 3,
				"frontName": "这些商品都是999+的好评",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "999+好评",
				"id": 1040031,
				"subCateList": []
			},
			{
				"showIndex": 289,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"type": 3,
				"frontName": "这些商品常常上热搜",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "大家都在搜",
				"id": 109237000,
				"subCateList": []
			},
			{
				"showIndex": 288,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装低至5折",
				"id": 109239002,
				"subCateList": []
			},
			{
				"showIndex": 287,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋靴特惠",
				"id": 109239001,
				"subCateList": []
			},
			{
				"showIndex": 286,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"type": 3,
				"frontName": "活动时间;1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "日用好物低至7折",
				"id": 109239004,
				"subCateList": []
			},
			{
				"showIndex": 285,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "收纳好物低至6折",
				"id": 109239003,
				"subCateList": []
			},
			{
				"showIndex": 284,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "母婴低至6折",
				"id": 109239000,
				"subCateList": []
			},
			{
				"showIndex": 283,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"type": 3,
				"frontName": "为家打造新气象",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新气象",
				"id": 109237001,
				"subCateList": []
			},
			{
				"showIndex": 281,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"type": 3,
				"frontName": "办个热闹的火锅轰趴",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "跨年火锅轰趴",
				"id": 109237002,
				"subCateList": []
			},
			{
				"showIndex": 280,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"type": 3,
				"frontName": "送父母一份暖心的礼物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "新年送爸妈",
				"id": 109237004,
				"subCateList": []
			},
			{
				"showIndex": 276,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"type": 3,
				"frontName": "元旦出游必备好物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "元旦出游攻略",
				"id": 109237008,
				"subCateList": []
			},
			{
				"showIndex": 275,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"type": 3,
				"frontName": "远离雾霾，享受纯净空气",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "除霾好物",
				"id": 109237009,
				"subCateList": []
			},
			{
				"showIndex": 274,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"type": 3,
				"frontName": "开启舒适懒人模式",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人专属定制",
				"id": 109228015,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 2,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/fd0e88792d85ea81d7a764cc50cf3b03.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/59b49865404a2ed98c17f1c4bf1899ce.png",
		"frontDesc": "配角，亦是主角",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/935f1ab7dcfeb4bbd4a5da9935161aaf.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1008000",
		"superCategoryId": 0,
		"name": "鞋包配饰",
		"iconUrl": "http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png",
		"id": 1008000,
		"subCateList": [
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "品质生活全球购",
				"id": 109229007,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "办公室贪嘴小食",
				"id": 109229008,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季出游精选",
				"id": 109226014,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "保暖家居服",
				"id": 109226013,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "拒绝秋冬贴膘",
				"id": 109226012,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季温暖家电",
				"id": 109224009,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日舒适床品",
				"id": 109224001,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人方便速食",
				"id": 109224008,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季祛寒茶饮",
				"id": 109224007,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "萌宝初冬新装",
				"id": 109224006,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "男士冬季新装",
				"id": 109224005,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "女士冬季新装",
				"id": 109224004,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "干季滋润护理",
				"id": 109224003,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日暖心配饰",
				"id": 109224002,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 3,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/3f761d8082a403196b8434f3692ab75a.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/30c58298983e4a154b00543018ab3eb5.png",
		"frontDesc": "贴身的，要亲肤",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/135113d6a43536b717063413fa24d69a.jpg",
		"wapExpandPicTargetUrl": "https://act.you.163.com/act/pub/4J7pQnIowr.html",
		"superCategoryId": 0,
		"name": "服装",
		"iconUrl": "http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png",
		"id": 1010000,
		"subCateList": [
			{
				"showIndex": 19,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"type": 3,
				"frontName": "居家爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "床品家装",
				"id": 109221009,
				"subCateList": []
			},
			{
				"showIndex": 18,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"type": 3,
				"frontName": "配件爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "箱包配件",
				"id": 109221008,
				"subCateList": []
			},
			{
				"showIndex": 17,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"type": 3,
				"frontName": "服装爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "经典服饰",
				"id": 109221007,
				"subCateList": []
			},
			{
				"showIndex": 16,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"type": 3,
				"frontName": "电器爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器数码",
				"id": 109221006,
				"subCateList": []
			},
			{
				"showIndex": 15,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"type": 3,
				"frontName": "洗护爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护美妆",
				"id": 109221005,
				"subCateList": []
			},
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"type": 3,
				"frontName": "饮食爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "零食酒水",
				"id": 109221004,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"type": 3,
				"frontName": "餐厨爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "厨房杂货",
				"id": 109221003,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"type": 3,
				"frontName": "婴童爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童用品",
				"id": 109221002,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"type": 3,
				"frontName": "文体区爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体周边",
				"id": 109221001,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"type": 3,
				"frontName": "海外制造、网易子品牌推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "海外特色",
				"id": 109221000,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 4,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/57b6c260263d6e716ab7ed13e935fc8e.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/fcd5a4b7f9dc02673945513aecc3d14a.jpg",
		"frontDesc": "智能电器，点亮生活。",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/369bfa3656be0771e62b79d181b4433b.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1043000",
		"superCategoryId": 0,
		"name": "电器",
		"iconUrl": "http://yanxuan.nosdn.127.net/4a54379128e65792fd836ee461e2ce27.png",
		"id": 1043000,
		"subCateList": [
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"type": 3,
				"frontName": "居家新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新品",
				"id": 109217022,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "鞋包配饰新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋包配饰新品",
				"id": 109217023,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"type": 3,
				"frontName": "服装新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装新品",
				"id": 109217024,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"type": 3,
				"frontName": "电器新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器新品",
				"id": 109217025,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"type": 3,
				"frontName": "饮食新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "饮食新品",
				"id": 109217027,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"type": 3,
				"frontName": "餐厨新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "餐厨新品",
				"id": 109217028,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"type": 3,
				"frontName": "洗护新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护新品",
				"id": 109217026,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"type": 3,
				"frontName": "文体新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体新品",
				"id": 109217030,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"type": 3,
				"frontName": "婴童新品好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童新品",
				"id": 109217029,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "特色区新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "特色区新品",
				"id": 109217031,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 5,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/8aa5410d9d8fe87cf4da7715531c70b3.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/2b3027f0f2b1acfdb4b56435cf92dba4.png",
		"frontDesc": "亲肤之物，严选天然",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/14bb4a29498a0f93a1ea001f26fea1dd.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1013001",
		"superCategoryId": 0,
		"name": "洗护",
		"iconUrl": "http://yanxuan.nosdn.127.net/9fe068776b6b1fca13053d68e9c0a83f.png",
		"id": 1013001,
		"subCateList": [
			{
				"showIndex": 291,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"type": 3,
				"frontName": "来自网易CEO丁磊的好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "丁磊的好货推荐",
				"id": 1031001,
				"subCateList": []
			},
			{
				"showIndex": 290,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"type": 3,
				"frontName": "这些商品都是999+的好评",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "999+好评",
				"id": 1040031,
				"subCateList": []
			},
			{
				"showIndex": 289,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"type": 3,
				"frontName": "这些商品常常上热搜",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "大家都在搜",
				"id": 109237000,
				"subCateList": []
			},
			{
				"showIndex": 288,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装低至5折",
				"id": 109239002,
				"subCateList": []
			},
			{
				"showIndex": 287,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋靴特惠",
				"id": 109239001,
				"subCateList": []
			},
			{
				"showIndex": 286,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"type": 3,
				"frontName": "活动时间;1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "日用好物低至7折",
				"id": 109239004,
				"subCateList": []
			},
			{
				"showIndex": 285,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "收纳好物低至6折",
				"id": 109239003,
				"subCateList": []
			},
			{
				"showIndex": 284,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "母婴低至6折",
				"id": 109239000,
				"subCateList": []
			},
			{
				"showIndex": 283,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"type": 3,
				"frontName": "为家打造新气象",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新气象",
				"id": 109237001,
				"subCateList": []
			},
			{
				"showIndex": 281,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"type": 3,
				"frontName": "办个热闹的火锅轰趴",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "跨年火锅轰趴",
				"id": 109237002,
				"subCateList": []
			},
			{
				"showIndex": 280,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"type": 3,
				"frontName": "送父母一份暖心的礼物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "新年送爸妈",
				"id": 109237004,
				"subCateList": []
			},
			{
				"showIndex": 276,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"type": 3,
				"frontName": "元旦出游必备好物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "元旦出游攻略",
				"id": 109237008,
				"subCateList": []
			},
			{
				"showIndex": 275,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"type": 3,
				"frontName": "远离雾霾，享受纯净空气",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "除霾好物",
				"id": 109237009,
				"subCateList": []
			},
			{
				"showIndex": 274,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"type": 3,
				"frontName": "开启舒适懒人模式",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人专属定制",
				"id": 109228015,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 6,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/23b7e03b68d0c71b5982c6e28e90b525.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/e71c18948044771a7ebd4c9cc551ce8a.png",
		"frontDesc": "好吃，高颜值美食",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/9a29ef4f41c305a12e1459f12abd290f.jpg",
		"wapExpandPicTargetUrl": "https://act.you.163.com/act/pub/djsFvgkqXK.html",
		"superCategoryId": 0,
		"name": "饮食",
		"iconUrl": "http://yanxuan.nosdn.127.net/c9280327a3fd2374c000f6bf52dff6eb.png",
		"id": 1005002,
		"subCateList": [
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "品质生活全球购",
				"id": 109229007,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "办公室贪嘴小食",
				"id": 109229008,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季出游精选",
				"id": 109226014,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "保暖家居服",
				"id": 109226013,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "拒绝秋冬贴膘",
				"id": 109226012,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季温暖家电",
				"id": 109224009,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日舒适床品",
				"id": 109224001,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人方便速食",
				"id": 109224008,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季祛寒茶饮",
				"id": 109224007,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "萌宝初冬新装",
				"id": 109224006,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "男士冬季新装",
				"id": 109224005,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "女士冬季新装",
				"id": 109224004,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "干季滋润护理",
				"id": 109224003,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日暖心配饰",
				"id": 109224002,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 7,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/70e6dda08179a8df081d8a4f78b28e0a.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/b2640c3ed2061b94687ebcfd15b3ba09.jpg",
		"frontDesc": "厨房",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/88855173a0cfcfd889ee6394a3259c4f.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1005001",
		"superCategoryId": 0,
		"name": "餐厨",
		"iconUrl": "http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png",
		"id": 1005001,
		"subCateList": [
			{
				"showIndex": 19,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0cbe111b280355fd9090bf588f6f4df0.png",
				"type": 3,
				"frontName": "居家爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "床品家装",
				"id": 109221009,
				"subCateList": []
			},
			{
				"showIndex": 18,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/424e0ea6b3c75ec700fd1b7efe1ea2a7.png",
				"type": 3,
				"frontName": "配件爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "箱包配件",
				"id": 109221008,
				"subCateList": []
			},
			{
				"showIndex": 17,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f96b823ee9350e7a18c7397ef9688ca9.png",
				"type": 3,
				"frontName": "服装爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "经典服饰",
				"id": 109221007,
				"subCateList": []
			},
			{
				"showIndex": 16,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/a0777e232f60263867cc05f40896c7c3.png",
				"type": 3,
				"frontName": "电器爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器数码",
				"id": 109221006,
				"subCateList": []
			},
			{
				"showIndex": 15,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f11898e932c793a97f67d2d663fe1986.png",
				"type": 3,
				"frontName": "洗护爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护美妆",
				"id": 109221005,
				"subCateList": []
			},
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/36767852c9f6b0c2c6b2763b542a1aed.png",
				"type": 3,
				"frontName": "饮食爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "零食酒水",
				"id": 109221004,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1bfac3a8f06a100687e5b8ba91579689.png",
				"type": 3,
				"frontName": "餐厨爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "厨房杂货",
				"id": 109221003,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e7f964b467eb1e62c7469bde5ae36f06.png",
				"type": 3,
				"frontName": "婴童爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童用品",
				"id": 109221002,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dfaaf1078144d9733973c21bd46627b6.png",
				"type": 3,
				"frontName": "文体区爆品推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体周边",
				"id": 109221001,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/73ac8191b033d4820def1b9211e3f91d.png",
				"type": 3,
				"frontName": "海外制造、网易子品牌推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "海外特色",
				"id": 109221000,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 8,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/9e5cebe56f9b6ee9debf2ec778c204e0.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/25651230d328b48f878d3a488a7f88b1.jpg",
		"frontDesc": "爱，从心开始",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/8ab3c73fe90951a942e8b06d848f8743.jpg",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1011000",
		"superCategoryId": 0,
		"name": "婴童",
		"iconUrl": "http://yanxuan.nosdn.127.net/1ba9967b8de1ac50fad21774a4494f5d.png",
		"id": 1011000,
		"subCateList": [
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/0d397f9d15f47c02c75ac56ee431295a.png",
				"type": 3,
				"frontName": "居家新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新品",
				"id": 109217022,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "鞋包配饰新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋包配饰新品",
				"id": 109217023,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/4df3ffa0177e386620fdbcdb5b3c87ee.png",
				"type": 3,
				"frontName": "服装新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装新品",
				"id": 109217024,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/cec58d3ba7b489c45b9d09ab25b3bf73.png",
				"type": 3,
				"frontName": "电器新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "电器新品",
				"id": 109217025,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/f76c766c5458164b91d3c6214fe33832.png",
				"type": 3,
				"frontName": "饮食新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "饮食新品",
				"id": 109217027,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/bc9911ee6e2fdff08d2580fa4bc040e9.png",
				"type": 3,
				"frontName": "餐厨新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "餐厨新品",
				"id": 109217028,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/91368c359674d8bd74acede3602aa349.png",
				"type": 3,
				"frontName": "洗护新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "洗护新品",
				"id": 109217026,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/43401c9d1a8d37a2b28c3fb6ee674bab.png",
				"type": 3,
				"frontName": "文体新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "文体新品",
				"id": 109217030,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/9bc1c139adbb212295db5783df157938.png",
				"type": 3,
				"frontName": "婴童新品好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "婴童新品",
				"id": 109217029,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/dabb448cede5d62064b738d7c5950662.png",
				"type": 3,
				"frontName": "特色区新品好物推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "特色区新品",
				"id": 109217031,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 9,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/ac93580ecfd06927f8e76a6cc3d1c46e.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/54e55e9d8a74c2cef5d624f99860ccdb.png",
		"frontDesc": "爱好，点缀生活",
		"type": 0,
		"frontName": "",
		"imgUrl": "//nos.netease.com/yanxuan/72de912b6350b33ecf88a27498840e62.jpg",
		"wapExpandPicTargetUrl": "https://you.163.com/item/saleRank?categoryId=1019000",
		"superCategoryId": 0,
		"name": "文体",
		"iconUrl": "http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png",
		"id": 1019000,
		"subCateList": [
			{
				"showIndex": 291,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png",
				"type": 3,
				"frontName": "来自网易CEO丁磊的好货推荐",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "丁磊的好货推荐",
				"id": 1031001,
				"subCateList": []
			},
			{
				"showIndex": 290,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/756fc45b73941c43dc2e7d84b9aa8c08.png",
				"type": 3,
				"frontName": "这些商品都是999+的好评",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "999+好评",
				"id": 1040031,
				"subCateList": []
			},
			{
				"showIndex": 289,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/3f09367f18fd46526b3a269f24ad2000.png",
				"type": 3,
				"frontName": "这些商品常常上热搜",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "大家都在搜",
				"id": 109237000,
				"subCateList": []
			},
			{
				"showIndex": 288,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d588a5f8e3aeb57d229846345a186520.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "服装低至5折",
				"id": 109239002,
				"subCateList": []
			},
			{
				"showIndex": 287,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d5715b6e3282e9056a26c93ca2f6e7db.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "鞋靴特惠",
				"id": 109239001,
				"subCateList": []
			},
			{
				"showIndex": 286,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e448588f6901d94dd52bd1a575767753.png",
				"type": 3,
				"frontName": "活动时间;1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "日用好物低至7折",
				"id": 109239004,
				"subCateList": []
			},
			{
				"showIndex": 285,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/6d6f04b56eb8dd0156dde439910f0b66.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "收纳好物低至6折",
				"id": 109239003,
				"subCateList": []
			},
			{
				"showIndex": 284,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e8ce4ba0c4c9de06b4fd82ff600c3080.png",
				"type": 3,
				"frontName": "活动时间：1.1-1.7",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "母婴低至6折",
				"id": 109239000,
				"subCateList": []
			},
			{
				"showIndex": 283,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/1641653d7cc08fdf2559b6385d90b231.png",
				"type": 3,
				"frontName": "为家打造新气象",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "居家新气象",
				"id": 109237001,
				"subCateList": []
			},
			{
				"showIndex": 281,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/10ceea25caee323abf4e5d26d74cb1d4.png",
				"type": 3,
				"frontName": "办个热闹的火锅轰趴",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "跨年火锅轰趴",
				"id": 109237002,
				"subCateList": []
			},
			{
				"showIndex": 280,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/ae5944b93150cf17bbebc3ba850d3f55.png",
				"type": 3,
				"frontName": "送父母一份暖心的礼物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "新年送爸妈",
				"id": 109237004,
				"subCateList": []
			},
			{
				"showIndex": 276,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc8ae14f8366c7dbaed31ba14a38bad5.png",
				"type": 3,
				"frontName": "元旦出游必备好物",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "元旦出游攻略",
				"id": 109237008,
				"subCateList": []
			},
			{
				"showIndex": 275,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7133cb4594d6ecaeadebeeb5114b7e78.png",
				"type": 3,
				"frontName": "远离雾霾，享受纯净空气",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "除霾好物",
				"id": 109237009,
				"subCateList": []
			},
			{
				"showIndex": 274,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d06244d5ba0f87501a0700792a1b1e32.png",
				"type": 3,
				"frontName": "开启舒适懒人模式",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人专属定制",
				"id": 109228015,
				"subCateList": []
			}
		]
	},
	{
		"showIndex": 10,
		"level": "L1",
		"wapBannerUrl": "http://yanxuan.nosdn.127.net/2213d1089e494aaed96e9b1d7b212210.jpg",
		"bannerUrl": "http://yanxuan.nosdn.127.net/f7e769065ba34291d83d4bc59db24587.png",
		"frontDesc": "严选特色区，好物全球选",
		"type": 0,
		"frontName": "",
		"imgUrl": "http://yanxuan.nosdn.127.net/d9f2d29a543a817a1af0bc682ba20ff2.png",
		"wapExpandPicTargetUrl": "https://m.you.163.com/item/saleRank?categoryId=1065000",
		"superCategoryId": 0,
		"name": "特色区",
		"iconUrl": "http://yanxuan.nosdn.127.net/a4b75bb5f9289cc07370237cb1a25a30.png",
		"id": 1065000,
		"subCateList": [
			{
				"showIndex": 14,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/fc87526ae9be33dfa45800567ec735d3.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "品质生活全球购",
				"id": 109229007,
				"subCateList": []
			},
			{
				"showIndex": 13,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/707a86591ac5714b4517474c8af38a17.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "办公室贪嘴小食",
				"id": 109229008,
				"subCateList": []
			},
			{
				"showIndex": 12,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/d997da3d78408efb74b86a1fc34dcf90.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季出游精选",
				"id": 109226014,
				"subCateList": []
			},
			{
				"showIndex": 11,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/c82f6ac299031773f4551dae0cc559fa.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "保暖家居服",
				"id": 109226013,
				"subCateList": []
			},
			{
				"showIndex": 10,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/8d8c6dbb63565ef065619ef1038fb462.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "拒绝秋冬贴膘",
				"id": 109226012,
				"subCateList": []
			},
			{
				"showIndex": 9,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/aa9d3c8dd65070df7ab41e9fd4964ca2.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季温暖家电",
				"id": 109224009,
				"subCateList": []
			},
			{
				"showIndex": 8,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/50c65277275790dcca741222ac6115b4.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日舒适床品",
				"id": 109224001,
				"subCateList": []
			},
			{
				"showIndex": 7,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/682b084019c74bcce7c322e0ec0ecd9a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "懒人方便速食",
				"id": 109224008,
				"subCateList": []
			},
			{
				"showIndex": 6,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/e31a3e2d6c63cc00ed9d137ec5d10147.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬季祛寒茶饮",
				"id": 109224007,
				"subCateList": []
			},
			{
				"showIndex": 5,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/989d19ba6bdccc3bc8e1d2040059ae7b.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "萌宝初冬新装",
				"id": 109224006,
				"subCateList": []
			},
			{
				"showIndex": 4,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/7bd93dd6bb474ecfaed954f01809feb8.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "男士冬季新装",
				"id": 109224005,
				"subCateList": []
			},
			{
				"showIndex": 3,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/33346c4755915110937a279577cda230.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "女士冬季新装",
				"id": 109224004,
				"subCateList": []
			},
			{
				"showIndex": 2,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/51372a24235f27e698ce609a7d2fbcba.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "干季滋润护理",
				"id": 109224003,
				"subCateList": []
			},
			{
				"showIndex": 1,
				"wapBannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"bannerUrl": "http://yanxuan.nosdn.127.net/20dae8b4c1bca5c3dac5a3ea98d5377a.png",
				"type": 3,
				"frontName": "",
				"wapExpandPicTargetUrl": "",
				"superCategoryId": 0,
				"name": "冬日暖心配饰",
				"id": 109224002,
				"subCateList": []
			}
		]
	}
]
// 获取分类页面要数据状态
function sortCateList (state = initArr, action) {
	switch (action.type) {
		case SORT_CATELIST:
			return action.data
		default:
			return state
	}
}

// 多个reducer时
export default combineReducers({
	searchByText,
	searchInit,
	homeNavList,
	homePopularList,
	homeTimeList,
	homeNewList,
	homeCateList,
	sortCateList
})
