import '../employees/employees.css'
function AddEmployee(){
    return(
        <div className="members">
            <h1>NEW EMPLOYEES</h1>
            
                <span>First Name</span><br></br>
            <input placeholder=""/><br></br>
             <span>Last Name</span><br></br>
            <input placeholder=""/><br></br>
            <span>Email</span><br></br>
            <input placeholder=""/><br></br>
            <br></br>
            <button> Add Employee</button><br></br>
            <br></br>
            <button> Update Employee</button><br></br>
            <br></br>
            <button> Delete Employee</button><br></br>
            
            
        </div>
        
    )
}

export default AddEmployee;
