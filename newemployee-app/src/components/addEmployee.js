import React,  { useState } from "react"
import '../components/add.css'

function AddEmployee(props){
    
    
    const[firstname,setfirstname] = useState('')
    const [lastname,setlastname] = useState("");
    const[email,setemail]= useState("");

    const add = (()=>{
        console.log(firstname);
        console.log(lastname);
        console.log(email);

        props.add(firstname,lastname,email) ;
    })
    return(
        <div>
            <h1>NEW EMPLOYEES</h1>
            <br></br>
            <br></br>
            <span>First Name</span><br></br>
            <input placeholder="Enter FirstName" onChange={(e)=> setfirstname(e.target.value)}/><br></br>
            <span>Last Name</span><br></br>
            <input placeholder="Enter LastName"onChange={(e)=> setfirstname(e.target.value)}/><br></br>
            <span>Email Address</span><br></br>
            <input placeholder=" Enter Email Address"onChange={(e)=> setfirstname(e.target.value)}/><br></br>
            <br></br>
            <br></br>
            <button onClick={add}>Add Employees</button>



        </div>
    );
}
export default  AddEmployee;