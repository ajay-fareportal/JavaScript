import React, { Component } from "react";
import axios from "axios";

class AccountAddComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "0",
            name: "",
            designation: "",
            email: "",
            location: ""
        };
    }

    onNameChange = e => {
        this.setState({
            name: e.target.value
        });
    };

    onDesignationChange = e => {
        this.setState({
            designation: e.target.value
        });
    };

    onEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    onLocationChange = e => {
        this.setState({
            location: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: '0',
            name: this.state.name,
            designation: this.state.designation,
            email: this.state.email,
            location: this.state.location
        };
        axios
            .post("https://localhost:5001/Employee/add/", data)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container mt-5 row justify-content-center">

                <form className="form-group col col-4" onSubmit={this.handleSubmit}>
                    <h3 className="p-3 text-center">Add Employee</h3>
                    <input
                        className="form-control m-3" placeholder="Name" value={this.state.name}
                        onChange={this.onNameChange} required
                    />
                    <input
                        className="form-control m-3"
                        placeholder="designation" value={this.state.designation}
                        onChange={this.onDesignationChange} required
                    />

                    <input
                        className="form-control m-3"
                        placeholder="email" value={this.state.email}
                        onChange={this.onEmailChange} required
                    />

                    <input
                        className="form-control m-3"
                        placeholder="location" value={this.state.location}
                        onChange={this.onLocationChange} required
                    />
                    <button className="form-control btn btn-primary m-3" type="submit">Add Employee</button>
                </form>
            </div>
        );
    }
}

export default AccountAddComponent;