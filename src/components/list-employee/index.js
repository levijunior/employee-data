import React from 'react';

const ListEmployee = props => {
  return(
    <div className="app_container--list padding-card">
      <h2>All employees</h2>

      <section className="search-employees mt-5 mb-4">
        <input 
          className="form-control form-control-lg" 
          type="text" 
          placeholder="Filter by name" 
          onChange={props.filter}
        />
      </section>

      <section className="list-employees">
        <div className="table-responsive-md">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Salary</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {
                props.employees ?
                  props.employees.map( item =>
                    <tr key={item.id} onClick={ () => props.detail(item.id) } className={props.specificEmployee !== null && item.id === props.specificEmployee.id ? 'bg-info text-white' : ''}>
                      <td>{item.employee_name}</td>
                      <td>${item.employee_salary}</td>
                      <td>{item.employee_age}</td>
                    </tr>
                  )
                :
                <tr></tr>
              }
            </tbody>
          </table>
        </div>
      </section>
    </div>  
  )
} 

export default ListEmployee;