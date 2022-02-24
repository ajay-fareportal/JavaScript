import StockDataUsingHooks from "./Hooks/StockDataUsingHooks";
import SBIStocks from "./SBIStocks";
import ParentChildHeirarchy from './Hooks/ParentChildHeirarchy'

function App() {

  var stockInfo = [
    "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/SBI",
    "https://priceapi.moneycontrol.com/pricefeed/bse/equitycash/NLC"
  ]

  return (
    <div className="">
      {/* <div >
        {stockInfo.map((stock) => {
          return <StockDataUsingHooks apiUri={stock} />
        })}
      </div> */}
      <ParentChildHeirarchy/>
    </div>
  );
}

export default App;
