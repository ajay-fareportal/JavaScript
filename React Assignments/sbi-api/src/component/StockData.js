export default function StockData(props) {
    debugger
    return (
        <div className='row mt-4 justify-content-center'>
            <div className="col col-6">
                <h1 className="text-center">{props.data.SC_FULLNM}</h1>
                <p className="text-center">Sell Rate: {props.data.BIDP}</p>
                <p className="text-center">Current Price: {props.data.pricecurrent}</p>
                <p className="text-center">Last Updated: {props.data.lastupd}</p>
                
                {/* <p>Sell Rate: {props.data.BIDP}</p> */}
            </div>
        </div>
    )
}