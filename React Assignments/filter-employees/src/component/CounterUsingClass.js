import { Component } from "react";

export default class IncrementCounter extends Component {
    constructor() {
        super();
        this.state = {
            counter: new Date().toLocaleTimeString()
        }
        setInterval(() => {
            let time = new Date().toLocaleTimeString();
            debugger;
            this.setState({
                counter: time
            })
            console.log(this.state.counter);
        }, 1000)
    }

    render() {
        debugger;
        return <h1>Current Time is: {this.state.counter}</h1>
    }
}