import Employee from "./Employee";
import axios from 'axios'
import React, { Component } from 'react'
import employeeList from "../data/employeesData";

class EmployeeList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeList: [],
            empdata: {}
        }
    }

    // searchEmp(event) {
    //     var search = event.target.value;
    //     if( search === ''){
    //         this.setState()
    //     }
    // }

    render() {
        debugger
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
                        debugger
                        return (<Employee {...employee} updateData = {this.updateData} deleteData={this.deleteData} />)
                    })}
                </div>
            </div>
        )
    }

    getData() {
        axios.get('https://localhost:5001/Employee/employees')
            .then(response => {
                this.setState({
                    employeeList: response.data
                })
                console.log(response)
            })
            .catch()
    }

    deleteData = (event) => {
        debugger;
        let id = event.target.id;
        axios.delete('https://localhost:5001/Employee/delete/' + id).then(() => {
            alert("Employee is Deleted");
        })
        this.getData();
    }

    componentDidMount() {
        debugger
        this.getData();
    }


}

export default EmployeeList