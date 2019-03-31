import * as React from "react"

type MyProps = {};
type MyState = { r: any};
export class CycleCheck extends React.Component<MyProps, MyState> {
    constructor (props) {
	super(props)
	this.state = { r: 0 }
	console.log("constructor ok")
    }
    componentWillMount() {
	console.log("conponentWillMount ok")
    }
    componentDidMount() {
	console.log("componentDidMount ok")
    }
    
    componentWillReceiveProps (nextProps) {
	console.log("conmonentWillRecieveProps ok")
    }
    shouldComponentUpdates (nextProps, nextState) {
	//console.log (nextProps, nextState)
	console.log("shouldComponentUpdates ok")
	return true
    }
    componentWillUpdate () {
	console.log("conmonentWillUpdate ok")
    }
    componentDidUpdate () {
	console.log("conmonentDidUpdate ok")
    }

    componentWilUnmount() {
	console.log("componentWillUnount ok")
    }
    
    
    render () {
	console.log("render ok")
	const setStateHandler = (e) => {
	    console.log("call setStateHandler ok")
	    this.setState( { r: Math.random() } )
	}
	return ( <div>
		   <button onClick={setStateHandler}>
		     setState suruyo </button>
		 </div> )
    }
}
