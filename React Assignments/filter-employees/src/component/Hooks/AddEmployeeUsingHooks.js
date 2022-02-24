import React from "react";
import axios from "axios";
export default function () {

    var [name, setName] = React.useState('');
    var [designation, setDesignation] = React.useState('');
    var [email, setEmail] = React.useState('');
    var [location, setLocation] = React.useState('');
debugger;
    function onNameChange(e) {
        setName = e.target.value;
    }
    function onDesignationChange(e) {
        setDesignation = e.target.value;
    }
    function onEmailChange(e) {
        setEmail = e.target.value;
    }
    function onLocationChange(e) {
        setLocation = e.target.value;
    }
    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: '0',
            name: name,
            designation: designation,
            email: email,
            location: location
        };
        axios.post("https://localhost:5001/Employee/add/", data)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="container mt-5 row justify-content-center">

                <form className="form-group col col-4" onSubmit={handleSubmit}>
                    <h3 className="p-3 text-center">Add Employee</h3>
                    <input
                        className="form-control m-3" placeholder="Name" 
                        onChange={onNameChange} required
                    />
                    <input
                        className="form-control m-3" 
                        placeholder="designation" 
                        onChange={onDesignationChange} required
                    />

                    <input
                        className="form-control m-3" 
                        placeholder="email" 
                        onChange={onEmailChange} required
                    />

                    <input
                        className="form-control m-3"
                        placeholder="location" 
                        onChange={onLocationChange} required
                    />
                    <button className="form-control btn btn-primary m-3" type="submit">Add Employee</button>
                </form>
            </div>
        </div>
    )
}