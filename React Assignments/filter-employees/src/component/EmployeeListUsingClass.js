import Employee from "./Employee";
// import axios from 'axios' 
import React, { Component } from 'react'
import employeeList from "../data/employeesData";

class EmployeeList extends Component {
    constructor(props){
        super(props)
        this.employeeState = employeeList;
        this.state = {
            employees :employeeList
        }
    }

    serachData(event){
        var searchKey = event.target.value;
        if(searchKey === ''){
            this.setState({employees : this.employeeState})
        }else{
            var newState = this.employeeState.filter(emp => 
                emp.name.toLowerCase().includes(searchKey.toLowerCase()))
                this.setState(
                    {employees : newState}
                )
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <input className="form-control" placeholder="Search Employee" onChange={this.serachData} />
                </div>
                <div className="flexbox-container justify-content-center">
                    {this.state.employees .map(
                            function (employee) {
                                return (<Employee {...employee} />)
                            }
                        )}
                </div>
            </div>
        )
    }
}

export default EmployeeList