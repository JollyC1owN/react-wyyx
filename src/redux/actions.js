/* 包含所有的action creator 
		创建action 的函数

		同步action 返回的都是一个对象
		异步action 返回的都是一个函数
*/
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
import {
	reqSearchResult,
	reqInitSearch,
	reqHomeData,
	reqCategoryList
} from '../api/index'
//根据输入的内容修改搜索结果数组
export const changeResultArr = (searchResultArr) => ({ type: SEARCH_RESULT, data: searchResultArr })
// 初始化显示搜索界面的内容
export const initSearchArr = (initArr) => ({ type: SEARCH_INIT, data: initArr })


// HOME页面中navlist
export const homeNavList = (data) => ({ type: HOME_NAVLIST, data })
// home中人气推荐的数据
export const homePopularList = (data) => ({ type: HOME_POPULLIST, data })
// home中限时购的数据
export const homeTimeList = (data) => ({ type: HOME_TIMELIST, data })
// home中新品首发的数据
export const homeNewList = (data) => ({ type: HOME_NEWLIST, data })
// home中拉杆箱的数据
export const homeCategoryList = (data) => ({ type: HOME_CATELIST, data })


// 分类中的数据
export const fenleiCategoryList = (data) => ({ type: SORT_CATELIST, data })


//异步action  ---必须在store中使用中间件才能这么写
//每一个异步的action最好提供一个同步的action

// 根据输入框的文本进行发请求
export const searchResult = (searchText) => {
	//返回的这个函数是由异步中间件（thunk），来调用
	return async (dispatch) => {
		//异步代码 ---在函数中才能执行异步代码
		let result = await reqSearchResult(searchText)
		//拿到请求结果去分发一个增加的 action
		if (result.code === '200') {
			dispatch(changeResultArr(result.data))
		}
	}
}
// 初始化请求搜索界面的内容
export const searchInit = () => {
	return async (dispatch) => {
		let result = await reqInitSearch()
		if (result.code === '200') {
			dispatch(initSearchArr(result.data.hotKeywordVOList))
		}
	}
}


// 获取home页面中的所有数据
export const getHomeObj = () => {
	return async dispatch => {
		let homeObj = await reqHomeData()
		if (homeObj.code === 0) {
			// 分发home中导航条和导航框的数据
			dispatch(homeNavList(homeObj.data.kingKongModule.kingKongList))
			// 分发home中人气推荐的数据
			dispatch(homePopularList(homeObj.data.popularItemList))
			// 分发home中限时购的数据
			dispatch(homeTimeList(homeObj.data.flashSaleModule.itemList))
			// 分发home中新品首发
			dispatch(homeNewList(homeObj.data.newItemList))
			// 分发home中拉杆箱
			dispatch(homeCategoryList(homeObj.data.categoryModule))
		}
	}
}


// 获取分类中的数据
export const getCategoryList = () => {
	return async (dispatch) => {
		let result = await reqCategoryList()
		if (result.code === 0) {
			dispatch(fenleiCategoryList(result.data.categoryL1List))
		}
	}
}
