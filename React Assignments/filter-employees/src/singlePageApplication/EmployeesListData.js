import axios from 'axios';
import React, { Component } from 'react'
import Employee from '../singlePageApplication/EmployeeData';

export class EmployeesListData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employeeList: [],
        }
    }

    componentDidMount() {
        this.getEmployeesList();
    }

    getEmployeesList() {
        axios.get(this.props.apiUri)
            .then(response => {
                debugger
                this.setState({
                    employeeList: response.data
                })
                console.log(response)
            })
            .catch()
    }


    render() {
        return (
            <div>
                <div className=" container row justify-content-center mt-4 mb-3">
                    <div className="col col-8">
                        <input className="form-control" placeholder="Search Employee" />
                    </div>
                    <div className="col col-2">
                        {/* <button type="submit" className="btn auto btn-primary mb-2"><i class="fa fa-plus"></i> Add Employee</button> */}
                    </div>
                </div>
                <div className="flexbox-container justify-content-center">
                    {this.state.employeeList.map((employee) => {
                        return (<Employee {...employee} />)
                    })}
                </div>
            </div>
        )
    }
}

export default EmployeesListData