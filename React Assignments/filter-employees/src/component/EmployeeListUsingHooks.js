import Employee from "./Employee";
import React from "react";
export default function EmployeeList(props) {

    const [employee, searchEmployees] = React.useState('');

    return (
        <div >
            <div className=" container row justify-content-center mt-4 mb-3">
                <div className="col col-8">
                    <input className="form-control" placeholder="Search Employee" onChange={event => searchEmployees(event.target.value)} />
                </div>
                <div className="col col-2">
                    <button type="submit" className="btn auto btn-primary mb-2"><i class="fa fa-plus"></i> Add Employee</button>
                </div>
            </div>
            <div className="flexbox-container justify-content-center">
                {props.employees.filter((val) => {
                    if(employee == ""){
                        return val;
                    }else if(val.name.toLowerCase().includes(employee.toLowerCase())){
                        return val;
                    }
                })
                .map(
                    function (employee) {
                        return (<Employee {...employee} />)
                    }
                )}
            </div>
        </div>
    )
}