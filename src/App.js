import logo from './logo.svg';
import './App.css';
import { Checkout } from './components/Checkout';
import { Component } from 'react';

const STEPPER_FUNC = [{
  name:"Customer Info",
  Component:()=><div>Provide your contact Details</div>

},
{name:"Shipping Info",
  Component :()=><div>Enter your shipping Address</div>
},
{
  name:"Payment",
  Component:()=><div>Complete payment for your order </div>
},
{
  name:"Order Placement",
  Component:()=><div>Your order has been placed</div>
}
]

function App() {
  return (
    <div className="App">
   
    <Checkout stepperConfig={STEPPER_FUNC}/>
    </div>
  );
}

export default App;
