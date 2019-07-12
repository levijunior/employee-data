import React from 'react';

const EmployeeDetails = (props) => {
  return(
    <div className="app_container--detail sticky-top padding-card">
        <h2 className="mb-5">Employee details</h2>
        {
          props.employeeDetail ?
            <>
              <img src={props.employeeDetail.profile_image ? props.employeeDetail.profile_image : `https://api.adorable.io/avatars/285/${props.employeeDetail.employee_name}.png`} alt="" className="img-fluid img-thumbnail mb-3"></img>
              <p className="h3 text-capitalize"><small>Name: </small> <span className="text-info">{props.employeeDetail.employee_name}</span></p>
              <p className="h5"><small>Salary: </small> <span className="text-info">{props.employeeDetail.employee_salary}</span></p>
              <p className="h5"><small>Age: </small> <span className="text-info">{props.employeeDetail.employee_age}</span></p>
              <p><small>ID: {props.employeeDetail.id}</small></p>
            </>

          : 
          <small>No employee has been selected.</small>
        }
    </div>  
  )
} 

export default EmployeeDetails;