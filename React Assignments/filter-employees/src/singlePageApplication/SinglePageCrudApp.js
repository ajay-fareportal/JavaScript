import axios from 'axios';
import React, { Component } from 'react'
import Employee from './EmployeeData';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import EmployeesListData from './EmployeesListData';

export class SinglePageCrudApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        debugger
        return (
            <BrowserRouter>
                <div>
                    <HeaderComponent></HeaderComponent>
                    <ContentComponent apiUri = {this.props.apiUri}></ContentComponent>
                    <FooterComponent></FooterComponent>
                </div>
            </BrowserRouter>

        )
    }

}



function HeaderComponent() {
    return (
        <div className='container mt-2'>
            <h1>This is header</h1>
            <nav>
                <Link style={{ margin: "10px" }} to="/">Home</Link>
                <Link style={{ margin: "10px" }} to="help">Help</Link>
                <Link style={{ margin: "10px" }} to="about">About</Link>
            </nav>
        </div>


    )
}
function ContentComponent(props) {
    debugger
    return (
        <div style={{ width: '100%', height: '600px',overflow: "auto", border: '1px solid black', padding: '10px', margin: '10px' }}>
            <Route exact path="/" component={EmployeeData(props)}></Route>
        </div>


    )
}

function EmployeeData(props){
    debugger
    <EmployeesListData apiUri = {props.apiUri} ></EmployeesListData>

}

function FooterComponent() {
    return (
        <div className='container mt-2'>
            mai footer hai
        </div>


    )
}

export default SinglePageCrudApp