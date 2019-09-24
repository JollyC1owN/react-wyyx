/* 包含所有的action creator 
		创建action 的函数

		同步action 返回的都是一个对象
		异步action 返回的都是一个函数
*/
import { SEARCH_RESULT, SEARCH_INIT } from "./action-types"
import { reqSearchResult, reqInitSearch } from '../api/index'
//根据输入的内容修改搜索结果数组
export const changeResultArr = (searchResultArr) => ({ type: SEARCH_RESULT, data: searchResultArr })

export const initSearchArr = (initArr) => ({ type: SEARCH_INIT, data: initArr })


//异步action  ---必须在store中使用中间件才能这么写
//每一个异步的action最好提供一个同步的action
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

export const searchInit = () => {
	return async (dispatch) => {
		let result = await reqInitSearch()
		if (result.code === '200') {
			dispatch(initSearchArr(result.data.hotKeywordVOList))
		}
	}
}


