import axios from 'axios';
import React, { Component } from 'react'

export class AddNewEmployee extends Component {
    constructor() {
        super()
        this.state = {
            id: 0,
            name: '',
            salary: '',
            email: '',
            designation: '',
            location: ''
        }

        this.changeName = this.changeName.bind(this);
        this.changeDesignation = this.changeDesignation.bind(this);
        this.changeSalary = this.changeSalary.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeLocation = this.changeLocation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    changeName(event) {
        this.setState({ name: event.target.value })
    }

    changeSalary(event) {
        this.setState({ salary: event.target.value })
    }
    changeDesignation(event) {
        this.setState({ designation: event.target.value })
    }
    changeLocation(event) {
        this.setState({ location: event.target.value })
    }
    changeEmail(event) {
        this.setState({ email: event.target.value })
    }
    handleSubmit() {
        debugger
        axios.post("https://localhost:5001/Employee/add/",{
            id: 0,
            name: this.state.name,
            designation: this.state.designation,
            email: this.state.email,
            location: this.state.location,
            salary: this.state.salary
        })
            .then((response) => {
                alert("Employee is Added");
                debugger
                this.props.history.push("");
                console.log(response)
            })
            .catch(err => console.log(err));
            

    }

    render() {
        debugger
        return (
            <div className="container mt-5 text-white row justify-content-center">
                <h3 className="text-center text-warning">Add Employee Details</h3>
                <form className="form-group col col-4">
                    <h4 className="text-center text-secondary"><i>Name : {this.state.name}</i></h4>
                    {/* <h4 className="text-center text-secondary"><i>Email : {this.state.email}</i></h4>
                    <h4 className="text-center text-secondary"><i>Designation : {this.state.designation}</i></h4>
                    <h4 className="text-center text-secondary"><i>Salary : {this.state.salary}</i></h4>
                    <h4 className="text-center text-secondary"><i>Location : {this.state.location}</i></h4> */}

                    <div className="form-group inline-form mt-3">
                        <span>Name</span>
                        <span><input
                            className="form-control"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.changeName}
                            required
                        /></span>
                    </div>

                    <div className="form-group inline-form mt-2">
                        <span>Designation</span>
                        <span><input
                            className="form-control"
                            placeholder="Designation"
                            value={this.state.designation}
                            onChange={this.changeDesignation}
                            required
                        /></span>
                    </div>
                    <div className="form-group inline-form mt-2">
                        <span>Email</span>
                        <span><input
                            className="form-control"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.changeEmail}
                            required
                        /></span>
                    </div>
                    <div className="form-group inline-form mt-2">
                        <span>Salary</span>
                        <span><input
                            className="form-control"
                            type='number'
                            placeholder="Salary"
                            value={this.state.salary}
                            onChange={this.changeSalary}
                            required
                        /></span>
                    </div>

                    <div className="form-group inline-form mt-2">
                        <span>Location</span>
                        <span><input
                            className="form-control"
                            placeholder="location"
                            value={this.state.location}
                            onChange={this.changeLocation}
                            required
                        /></span>
                    </div>

                    <button className="form-control btn btn-primary mt-3" onClick={this.handleSubmit} type="submit">Add Employee</button>
                </form>
            </div>
        )
    }
}

export default AddNewEmployee