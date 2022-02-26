import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import EmployeesListData from './EmployeesListData';
import Time from '../component/Hooks/CurrentTimeUsingHooks'
import AddNewEmployee from './AddNewEmployee';
import AboutComponent from './AboutComponent';
import ContactUsComponet from './ContactUsComponet';
import UpdateEmployee from './UpdateEmployee';
import '../css/style.css'
import FooterComponent from './FooterComponent';

export class SinglePageCrudApp extends Component {
    constructor() {
        super()
    }

    render() {
        debugger
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

function ContentComponent() {
    debugger
    return (
        <div className='bg-dark remove-scrollbar' style={{ width: '100%', height: '600px', overflow: "auto", border: '1px solid black', "border-radius": "10px", padding: '5px', margin: '10px' }}>

            <Route exact path="/" component={EmployeesListData}></Route>
            <Route exact path="/about" component={AboutComponent}></Route>
            <Route exact path="/contact" component={ContactUsComponet}></Route>
            <Route exact path="/addnew" component={AddNewEmployee}></Route>
            <Route exact path="/update/:id" component={UpdateEmployee}></Route>
        </div>
    )
}

function HeaderComponent() {
    return (
        <div className='container mt-2'>
            <h3 className='ms-2 text-center display-4 mb-3'>Single Page CRUD Application</h3>
            <nav style={{ margin: "auto" }}>
                <Link className='btn btn-primary' style={{ margin: "10px" }} to="/">Home</Link>
                <Link className='btn btn-outline-success text-white' style={{ margin: "10px" }} to="addnew">Add New Employee</Link>
                <Link className='btn btn-outline-success text-white' style={{ margin: "10px" }} to="about">About</Link>
                <Link className='btn btn-outline-success text-white' style={{ margin: "10px" }} to="contact">Contact US</Link>

            </nav>
        </div>


    )
}


export default SinglePageCrudApp