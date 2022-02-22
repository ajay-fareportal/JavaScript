import '../css/style.css'
export default function (props) {
    debugger;
    return (
        <div className="col col-lg-3 justify-content-center">
            <div className="card">
                <img src={props.avatar} />
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
                </div>
            </div>
        </div>
    )
}