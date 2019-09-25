import React, { Component } from 'react'
import './Search.styl'
export default class Search extends Component {
	state = {
		text: ''
	}
	componentDidMount () {
		this.props.searchInit()
	}
	getText = () => {
		let searchText = this.refs.searchInput.value.trim()
		this.setState({
			text: searchText
		})
		this.props.searchResult(searchText)
	}
	setList = (searchResultArr, searchInitArr) => {
		if (searchResultArr.length > 0) {
			return (<ul className="searchResultList">
				{
					searchResultArr.map((item, index) => {
						return <li key={index}>{item}</li>
					})
				}
			</ul>)
		} else {
			return (<div className="search-list">
				<p>热门搜索</p>
				<ul>
					{
						searchInitArr.map((item, index) => {
							return (<li className={item.highlight === 1 ? "highlight" : ""} key={index}>
								<a href={item.schemeUrl}>{item.keyword}</a>
							</li>)
						})
					}
				</ul>
			</div>)
		}
	}
	clearText = () => {
		this.refs.searchInput.value = ""
		this.setState({
			text: ''
		})
		this.props.searchResult('')
	}
	clearShow = () => {
		if (this.state.text > 0) {
			return (<i className="close" onClick={this.clearText}>×</i>)
		}
	}
	render () {
		let { searchResultArr, searchInitArr } = this.props
		return (
			<section className="search-container">
				<div className="search-title">
					<div className="search-input">
						<i className="iconfont icon-search"></i>
						<input
							type="text"
							className="placeholder"
							placeholder="即食燕窝 溯源可查"
							onChange={this.getText}
							value={this.state.text}
							ref="searchInput"
						/>
						{this.clearShow()}
					</div>
					<button onClick={() => { this.props.history.goBack() }}>取消</button>
				</div>
				{this.setList(searchResultArr, searchInitArr)}
			</section>
		)
	}
}
