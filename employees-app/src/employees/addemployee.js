import '../employees/employees.css'
function AddEmployee(){
    return(
        <div>
            <form>
                <span>First Name</span><br></br>
            <input placeholder=""/><br></br>
             <span>Last Name</span><br></br>
            <input placeholder=""/><br></br>
            <span>Email</span><br></br>
            <input placeholder=""/><br></br>
            <button> Add Employee</button>
            <button> Update Employee</button>
            <button> Delete Employee</button>
            </form>
            
        </div>
    )
}
export default AddEmployee;
