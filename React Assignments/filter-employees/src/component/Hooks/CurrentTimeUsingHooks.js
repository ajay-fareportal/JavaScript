import React from 'react'
export default function () {
    var time = new Date().toLocaleTimeString();
    var [time, setTime] = React.useState(time);

    setTimeout(() => {
        debugger;
        setTime(new Date().toLocaleTimeString());
    }, 1000)

    return (
        <div>
            <h1>Current Time is: {time}</h1>
        </div>
    )
}