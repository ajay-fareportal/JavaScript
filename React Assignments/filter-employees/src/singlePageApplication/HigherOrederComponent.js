function higherOrderComponent(Component) {
    function HOC() {
        return (
            <div style={{color: "black", border: "1px solid red", margin: "10px", padding: "10px"}}>
                <Component />
            </div>
      )
    }
    return HOC;
}

function AjayComponent() {
    return <h1>This is Ajay</h1>
}

function RajComponent() {
    return <h1>This is Raj</h1>
}

var NewComponent = higherOrderComponent(AjayComponent)
export var NewOtherComponent = higherOrderComponent(RajComponent)
export default NewComponent;