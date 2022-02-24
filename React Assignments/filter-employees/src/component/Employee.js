import axios from 'axios';
import '../css/style.css'
import EmployeeList from './EmployeeListUsingHooks';
export default function (props) {


    function deleteData() {
        axios.delete('https://localhost:5001/Employee/delete/' + props.id).then(() => {
            alert("Employee is Deleted");
        })

    }

    debugger;
    var img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxd5gg-LRn7F8v-sVBfPlpgyVOOaLK1BRklQ4W9VRfO7yrI3tNCYOhFDJEDZxY0sBlo7Y&usqp=CAU"
    return (
        <div className="col col-lg-3 justify-content-center">
            <div className="card">
                <img src={img} />
                <div className="card--content-head">
                    <p className="card--content-heading">{props.name}</p>
                    <div className="card--content small">({props.designation})</div>
                    <div className="card--content m-t">
                        <span>{props.email}</span>
                    </div>
                    <div className="card--content salary">
                        <span>{props.salary} <i class="fa fa-inr"></i></span>
                    </div>
                    <div className="card--content">
                        <span>{props.location}</span>
                    </div>
                    <div className='justify-content-center inline-form'>
                        <span><button className='btn m-2 btn-warning'>Edit</button></span>
                        <span><button className='btn m-2 btn-danger' id={props.id} onClick={deleteData} >Delete</button></span>
                    </div>

                </div>
            </div>
        </div>
    )
}