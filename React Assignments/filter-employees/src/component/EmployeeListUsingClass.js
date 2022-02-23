import Employee from "./Employee";
// import axios from 'axios' 
import React, { Component } from 'react'
import employeeList from "../data/employeesData";

class EmployeeList extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees :employeeList
        }
    }
    render() {
        return (
            <div>
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