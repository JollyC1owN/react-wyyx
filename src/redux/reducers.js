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
	HOME_CATELIST
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

// 多个reducer时
export default combineReducers({
	searchByText,
	searchInit,
	homeNavList,
	homePopularList,
	homeTimeList,
	homeNewList,
	homeCateList
})
