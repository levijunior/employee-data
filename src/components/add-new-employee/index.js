import React from 'react';

const AddNewEmployee = (props) => {
  return(
    <div className="app_container--new sticky-top padding-card">
      <h3>Add new Employee</h3>  
  
      <section className="add-employee mt-5 mb-4">

        <form onSubmit={props.AddEmployee}>
          <div className="form-group mb-3">
            <label className="m-0" htmlFor="name"><small>Name:</small></label>
            <input type="text" className="form-control" name="name" required onChange={props.handleChange} value={props.newEmployee.name || ''} />
          </div>
          <div className="form-group mb-3">
            <label className="m-0" htmlFor="salary"><small>Salary:</small></label>
            <input type="text" className="form-control" name="salary" pattern="^[0-9]+(\.[0-9]{1,2})?$" required onChange={props.handleChange} value={props.newEmployee.salary || ''} />
          </div>
          <div className="form-group mb-3">
            <label className="m-0" htmlFor="age"><small>Age:</small></label>
            <input type="number" className="form-control" name="age"required onChange={props.handleChange} value={props.newEmployee.age || ''} />
          </div>
          <button type="submit" className="btn btn-info">Send</button>
        </form>

      </section>
    </div>  
  )
} 

export default AddNewEmployee;