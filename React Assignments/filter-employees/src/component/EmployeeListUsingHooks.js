import Employee from "./Employee";
import React from "react";
import axios from "axios";
// import AddEmployee from "../AddEmployee";


export default function EmployeeList(props) {

    const [employees, setEmployees] = React.useState([]);
    
    React.useEffect(() =>{
        // console.log("hiii")
        getDataFromApi();
    },[])

    function getDataFromApi() {
        // debugger
        axios.get(props.employees)
            .then(response => {
                console.log(response);
                setEmployees(response.data)
                console.log(employees);
                // debugger
                
            })
    }

  

    return (
        <div >
            <div className=" container row justify-content-center mt-4 mb-3">
                <div className="col col-8">
                    <input className="form-control" placeholder="Search Employee" />
                </div>
                <div className="col col-2">
                    <button type="submit" className="btn auto btn-primary mb-2"><i class="fa fa-plus"></i> Add Employee</button>
                </div>
            </div>
            <div className="flexbox-container justify-content-center">
                {employees.map(
                        function (employee) {
                            return (<Employee {...employee} />)
                        }
                    )}
            </div>
        </div>
    )
}