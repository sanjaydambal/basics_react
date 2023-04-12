import React from 'react'
// import Person from './Person';

function NameList() 
// {
//     const Persons = [
//         {
//         id:1,
//         name:"sanjay",
//         salary:25000,
//     },
//     {
//         id:2,
//         name:"vinay",
//         salary:35000,
//     },
//     {
//         id:3,
//         name:"Lakshmikant",
//         salary:75000,
//     },
// ]
// const PersonList = Persons.map(person=><Person key={person.id} person = {person}/>);
// return <div>{PersonList}</div>
// }
{
    const names = ["sanjay","Vinay","Lakshmikant","Vinay"];
    const nameList = names.map((named,index) =><div key={index} >{index} . {named}</div>)
  return <div>{nameList}</div>
  }

export default NameList