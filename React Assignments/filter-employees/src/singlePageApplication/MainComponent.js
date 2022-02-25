import React from "react";
import { BrowserRouter, Route,Link } from 'react-router-dom'
import EmployeeList from "../component/EmployeeListUsingClassUsingAPI";

export default class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: 'Ajay'
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>
        )
    }

}

function HeaderComponent() {
    return (
        <div>
            <h1>This is header</h1>
             <nav>
                <Link style={{margin: "10px"}} to="/">Home</Link>
                <Link style={{margin: "10px"}} to="help">Help</Link>
                <Link style={{margin: "10px"}} to="about">About</Link>
            </nav>
        </div>
        
        
    )
}
function ContentComponent() {
    return (
        <div style={{ width: '100%', height: '600px', border: '1px solid black', padding: '10px', margin: '10px' }}>

            {/* <EmployeeList></EmployeeList> */}

            <Route exact path ="/" component={EmployeeList}></Route>
            {/* <Route exact path ='/about' component={HomeComponent}></Route>
            <Route exact path ='/help' component={HomeComponent}></Route> */}
        </div>
    )
}

function HomeComponent(){
    <div>
        This is home
    </div>
}

function FooterComponent() {
    return (
        <h1>This is FooterComponent</h1>
    )
}