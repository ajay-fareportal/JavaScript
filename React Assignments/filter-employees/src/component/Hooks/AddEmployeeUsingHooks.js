import React from "react";
import axios from "axios";
export default function () {

    var [employeeName, setEmployeeName] = React.useState('');
    var [employeeDesignation, setEmployeeDesignation] = React.useState('');
    var [employeeEmail, setEmployeeEmail] = React.useState('');
    var [employeeLocation, setEmployeeLocation] = React.useState('');
    
    debugger;
    function onNameChange(e) {
        setEmployeeName(e.target.value);
    }
    function onDesignationChange(e) {
        setEmployeeDesignation(e.target.value);
    }
    function onEmailChange(e) {
        setEmployeeEmail(e.target.value);
    }
    function onLocationChange(e) {
        setEmployeeLocation(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const employeeData = {
            id: 0,
            name: employeeName,
            designation: employeeDesignation,
            email: employeeEmail,
            location: employeeLocation,
            salary: 10000
        };
        axios.post("https://localhost:5001/Employee/add/", employeeData)
            .then((response) => {
                alert("Employee is Added");
                console.log(response)
            })
            .catch(err => console.log(err));

    }

    return (
        <div>
            <div className="container mt-5 row justify-content-center">

                <form className="form-group col col-4" onSubmit={handleSubmit}>
                    <h3 className="p-3 text-center">Add Employee</h3>
                    <input
                        className="form-control m-3" placeholder="Name"
                        onChange={onNameChange} 
                        value={employeeName} 
                        required
                    />
                    <input
                        className="form-control m-3"
                        placeholder="designation" 
                        value={employeeDesignation}
                        onChange={onDesignationChange} required
                    />

                    <input
                        className="form-control m-3"
                        placeholder="email" 
                        value={employeeEmail}
                        onChange={onEmailChange} required
                    />
                    
                    
                    <input
                        className="form-control m-3"
                        placeholder="location" 
                        value={employeeLocation}
                        onChange={onLocationChange} required
                    />
                    <button className="form-control btn btn-primary m-3" type="submit">Add Employee</button>
                </form>
            </div>
        </div>
    )
}