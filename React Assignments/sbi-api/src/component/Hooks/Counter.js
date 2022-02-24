import React from 'react'
export default function(){

    var [counter,setCounter] = React.useState(0);
    function decreseCounter(){
        setCounter(counter - 1);
    }
    function increseCounter(){
        debugger;
        setCounter(counter + 1);
    }
    setTimeout(() =>{
        debugger;
        increseCounter();
    },1000)

    return(
        <div>
            <h1>Counter: {counter}</h1>
            {/* <button className='btn btn-primary m-2' onClick={decreseCounter}>Decrese</button>
            <button className='btn btn-primary m-2'onClick={increseCounter} >Increse</button> */}
        </div>
    )
}