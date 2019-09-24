/* 
	包含多个reducer的模块
*/
import { combineReducers } from "redux"

import { SEARCH_RESULT, SEARCH_INIT } from "./action-types"


function searchByText (state = [], action) {
	switch (action.type) {
		case SEARCH_RESULT:
			return action.data
		default:
			return state
	}
}

function searchInit (state = [], action) {
	switch (action.type) {
		case SEARCH_INIT:
			return action.data
		default:
			return state
	}
}
// 多个reducer时
export default combineReducers({ searchByText, searchInit })
