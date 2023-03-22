import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
// import Message from './Components/Message';
// import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      
      {/* <Greet name = "vikas" lname = "balikai"><p> He works in HCL</p></Greet> */}
      {/* <Greet name = "Rajat" lname = "Acharya"> <p>He is a TPO </p></Greet> */}
      {/* <Greet name = "vinay" lname = "Bilagi"/> */}
      <Welcome name = "Lakshmikant" ><strong> He is a solution Architect</strong> </Welcome>
      {/* <Message/>  */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
