import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'
import AddEmployee from './components/addEmployee'
import "./components/add.css"

function App() {
  const[Employees, setEmployees] = useState ([]);
 
  const addEmployee = ((First,Last, Email)=>{

    setEmployees((Employees)=> [...Employees,{
      First:First,
      Last:Last,
      Email:Email

    }])


    


  })
  return (
    <div className="container">
      <AddEmployee add={addEmployee}/>
    </div>
  );
}

export default App;
