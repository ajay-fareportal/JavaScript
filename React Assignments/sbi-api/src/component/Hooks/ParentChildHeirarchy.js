import React from "react";

export default function GreatGrandParent() {
    var [nativeVillage] = React.useState('Bihar')
    return (
        <div className="container">
            <h1>Great Grand Parent <i>{nativeVillage}</i></h1>
                <GrandParent data = {nativeVillage}/>
        </div>
    )

}

function GrandParent(props) {
    return (
        <div >
           <h1>Grand Parent</h1>
                <Parent data = {props.data}/>
        </div>
    )

}

function Parent(props) {

    return (
        <div >
           <h1>Parent</h1>
                <Child data = {props.data}/>
        </div>
    )

}
function Child(props) {

    return (
        <div >
            <h1>Child</h1>
                <GrandChild data = {props.data}/>
        </div>
    )

}

function GrandChild(props) {
    return (
        <div >
               <h1>Grand Child <i>{props.data}</i></h1>
        </div>
    )

}