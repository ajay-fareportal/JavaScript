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

    deleteData = (event) => {
        axios.delete("https://localhost:5001/Employee/delete/" + event.target.id).then(() => {
            alert("Employee is deleted");
            axios.get('https://localhost:5001/Employee/employees')
                .then(response => {
                    this.setState({
                        employeeList: response.data
                    })
                    console.log(response)
                })
        })
    }

    componentDidMount() {
        axios.get('https://localhost:5001/Employee/employees')
            .then(response => {
                this.setState({
                    employeeList: response.data
                })
                console.log(response)
            })
            .catch()




        // axios.get('https://localhost:5001/Employee/delete/')
    }


}

export default EmployeeList