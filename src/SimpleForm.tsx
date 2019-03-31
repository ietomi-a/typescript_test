import * as React from "react"


type MyProps = {};
type MyState = { value: any };
export class SimpleForm extends React.Component<MyProps, MyState> {
    constructor (props:any) {
	super(props)
	this.state = { value: "" }
    }
    doChange (e: any) {
	const newValue = e.target.value
	this.setState( {value: newValue} )
    }
    doSubmit (e: any) {
	window.alert( " value send: " + this.state.value )
	console.log( "in console, value send: " + this.state.value )
	e.preventDefault()
    }
    render () {
	const doChange = (e:any) => this.doChange(e)
	const doSubmit = (e:any) => this.doSubmit(e)
	return ( <form onSubmit={doSubmit}>
		   <input type="text"
		          value={this.state.value}
		          onChange={doChange} />
		   <input type="submit" value="send" />
		 </form> )
    }
}
