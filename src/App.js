import React, { useState } from 'react'
import './App.css';
import Header from "./header.js";
import DelivTypes from './deliv-type';
import Forms from './forms.js';
import SubFooter from './subfooter';
import Footer from "./footer.js";

function App() {

  const [state, setState] = useState(
    {
     name: "",
     address: "",
    }
  )

  function updateForms(event) {
    event.preventDefault();
    const {name, value} = event.target
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }
  function sendDemo()   {
    if (state.name.length === 0) {
      alert("Please enter a valid name and address")
    } else if(state.address.length === 0){
      alert("Please enter a valid name and address")
    } else {
      alert(`Your data as received: {name: ${state.name}, address: ${state.address}}`)
    }
  }

  return (
    <div className="App">
      <header>
        <Header 
        />
      </header>
        <DelivTypes />
        <Forms 
          formUpdate={updateForms}
          sendForm={sendDemo}
        />
        <SubFooter />
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
