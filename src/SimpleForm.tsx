import * as React from "react"

export class SimpleForm extends React.Component<{}, { value: string }> {
    constructor (props) {
	super(props)
	this.state = { value: "" }
    }
    doChange (e) {
	const newValue = e.target.value
	this.setState( {value: newValue} )
    }
    doSubmit (e) {
	window.alert( " value send: " + this.state.value )
	console.log( "in console, value send: " + this.state.value )
	e.preventDefault()
    }
    render () {
	const doChange = (e) => this.doChange(e)
	const doSubmit = (e) => this.doSubmit(e)
	return ( <form onSubmit={doSubmit}>
		   <input type="text"
		          value={this.state.value}
		          onChange={doChange} />
		   <input type="submit" value="send" />
		 </form> )
    }
}
