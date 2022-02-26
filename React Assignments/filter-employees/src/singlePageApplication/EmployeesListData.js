import axios from 'axios';
import React, { Component } from 'react'
import Employee from './EmployeeData'

export class EmployeesListData extends Component {
    constructor(props) {
        super(props)
        this.searchedEmp = {}
        this.state = {
            employeeList: [],
        }
        this.deleteData = this.deleteData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.getEmployeesList = this.getEmployeesList.bind(this);
        this.serachData = this.serachData.bind(this);
    }

    serachData(event) {
        debugger
        var searchKey = event.target.value;
        if (searchKey === '') {
            this.setState({ employeeList: this.searchedEmp })
        } else {
            var newState = this.searchedEmp.filter(emp =>
                emp.name.toLowerCase().includes(searchKey.toLowerCase()))
            this.setState(
                { employeeList: newState }
            )
        }
        debugger
    }

    componentDidMount() {
        debugger
        this.getEmployeesList();
    }

    updateData = (event) => {
        var id = event.target.name;
        this.props.history.push("/update/" + id);
    }

    deleteData = (event) => {
        debugger;
        let id = event.target.id;
        axios.delete('https://localhost:5001/Employee/delete/' + id).then(() => {
            alert("Employee is Deleted");
            this.getEmployeesList();
        })

    }

    getEmployeesList() {
        const apiUri = 'https://localhost:5001/Employee/employees';
        axios.get(apiUri)
            .then(response => {
                debugger
                this.setState({
                    employeeList: response.data,

                })
                this.searchedEmp = response.data
                console.log(response)
            })
            .catch()
    }


    render() {
        return (
            <div>
                <div className=" container row justify-content-center mt-4 mb-2">
                    <div className='col col-10 ms-5'>
                        <input className="form-control" placeholder="Search Employee" onChange={this.serachData} />
                    </div>
                </div>
                <div className="flexbox-container justify-content-center">
                    {this.state.employeeList.map((employee) => {
                        return (<Employee {...employee} updateData={this.updateData} deleteData={this.deleteData} />)
                    })}
                </div>
            </div>
        )
    }
}

export default EmployeesListData