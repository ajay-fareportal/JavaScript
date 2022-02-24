import React from 'react'
import StockData from '../StockData'
import axios from 'axios'
export default function(props){

    var [data,setData] = React.useState('')

    React.useEffect(() =>{
        // console.log("hiii")
        getDataFromApi();
    },[])

    function getDataFromApi() {
        debugger
        axios.get(props.apiUri)
            .then(response => {
                //setData(props.data.data)
                setData(response.data.data)
                debugger
                console.log(response.data.data);
            })
    }
    debugger
    return(
        
        <div>
            <StockData data={data}>
            </StockData>

        </div>
    )
}