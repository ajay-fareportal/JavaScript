import React, { Component } from 'react'
import axios from 'axios';
import StockData from './StockData'

class SBIStocks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sbidata: {}
        }
    }

    componentDidMount() {
        debugger;
        this.getDataFromApi();
    }

    getDataFromApi() {
        axios.get("https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI")
            .then(response => {
                this.setState({
                    sbidata: response.data.data
                })
                console.log(response);
            })
    }

    render() {
        return (
            <div>
                {/* <p>{this.state.sbidata['0']}</p>
                <p>{this.state.sbidata['52L']}</p> */}
                <StockData data={this.state.sbidata}></StockData>
            </div>
        )
    }
}

export default SBIStocks