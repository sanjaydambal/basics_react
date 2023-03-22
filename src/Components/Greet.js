import React from 'react';

function Greet({name,lname}) {
    return (
        <div>
            <h1>Hello {name} {lname}</h1>
        </div>
    );
}
// const Greet = (props) => {

// return ( 
//     <>
// <h1> Hello {props.name} {props.lname}</h1>
// {props.children}
// </>
// );
// }
export default Greet;