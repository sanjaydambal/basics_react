import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PortalDemo from './Components/PortalDemo';
// import Hero from './Components/Hero';
// import ErrorBoundary from './Components/ErrorBoundary';
// import ClickCounter from './Components/ClickCounter';
// import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
// import User from './Components/User';
import Countertwo from './Components/Countertwo';
import { UserProvider } from './Components/UserContext';
import ComponentC from './Components/ComponentC';
import Parent from './Practice/Parent';
// import FocusInput from './Components/FocusInput';
// import FRParentInput from './Components/FRParentInput';
// import UserlLog from './Components/UserlLog';
// import NameList from './Components/NameList';
// import Form from './Components/Form';
// import LifecycleA from './Components/LifecycleA';
// import EventBind from './Components/EventBind';
// import VinMessage from './Components/VinMessage';
// import ClassClick from './Components/ClassClick';
// import FunctionClick from './Components/FunctionClick';
// import Greet from './Components/Greet';
//  import Welcome from './Components/Welcome';
//  import Message from './Components/Message';
// import Counter from './Components/Counter';
// import ParentComp from './Components/ParentComp';
// import Table from './Components/Table';
// import ParComp from './Components/ParComp';
// import Refs from './Components/Refs';


function App() {
  return (
    <div className="App">
      {/* <Table/> */}
      {/* <Greet name = "vikas" lname = "balikai"><p> He works in HCL</p></Greet> */}
      {/* <Greet name = "Rajat" lname = "Acharya"> <p>He is a TPO </p></Greet> */}
      {/* <Greet name = "vinay" lname = "Bilagi"/> */}
       {/* <Welcome name = "Lakshmikant" ><strong> He is a solution Architect</strong> </Welcome>  */}
       {/* <Message/>   */}
      {/* <Counter/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <VinMessage/> */}
      {/* <ParentComp/> */}
      {/* <UserlLog/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <Fragment/> */}
      {/* <ParComp/> */}
      {/* <Refs/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
      <Hero heroname={"SpiderMan"}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname={"Iron-Man"}/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroname={"Thanos"}/>
      </ErrorBoundary> */}
      {/* <ClickCounter name = "sanjay"/>
      <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User name ={(isLoggedIn)=> isLoggedIn ? "sanjay" : "Guest" }/> */}
      {/* <Countertwo render = {(count,incrementCount) => <ClickCounterTwo count = {count} incrementCount={incrementCount}></ClickCounterTwo>}/>
      <Countertwo render = {(count,incrementCount) => <HoverCounterTwo count = {count} incrementCount={incrementCount}></HoverCounterTwo>}/>
    <UserProvider value="Sanjay">
      <ComponentC/>
    </UserProvider> */}
    <Parent/>
    </div>
  );
}

export default App;
