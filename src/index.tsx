import * as React from "react"
import * as ReactDOM from "react-dom"
//import {SimpleForm} from "./SimpleForm"
//import {SimpleClock} from "./SimpleClock"
import {CycleCheck} from "./CycleCheck"

// ReactDOM.render(
// 	<SimpleForm />, document.getElementById("root") )

// ReactDOM.render(
// 	<SimpleClock />, document.getElementById("root") )

ReactDOM.render(
 	<CycleCheck />, document.getElementById("root") )

// 以下を付け加えると <SimpleForm /> が上書きされる。
// function Greeting (props) {
//     return <h1>{props.type}</h1>
// }
//
// const dom = <div>
//     <Greeting type="Good morning!" />
//     </div>

// ReactDOM.render(
// 	dom, document.getElementById("root") )
