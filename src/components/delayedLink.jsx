import React from 'react'
import { navigateTo } from 'gatsby-link'

export default class DelayedLink extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			to: `/`,
		}
		this.handleClick = this.handleClick.bind(this)
		this.navigateTo = this.navigateTo.bind(this)
	}

	navigateTo(to) {
		navigateTo(to)
	}

	handleClick(e) {
		e.stopPropagation()
		e.preventDefault()

		if (this.props.location.pathname != this.props.to) {
			this.props.onClick ? this.props.onClick(e) : null
			this.setState({ to: this.props.to })
			setTimeout(() => this.navigateTo(this.state.to), this.props.delay || 500)
		}
	}

	render(){
		return (
			<a
				href={this.props.to}
				className={`${this.props.className ? this.props.className : ``}`}
				onClick={e => this.handleClick(e)}
			>
				{this.props.children}
			</a>
		)
	}
}
