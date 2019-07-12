import React, { Component } from 'react'
import AddNewEmployee from './components/add-new-employee'
import ListEmployee from './components/list-employee'
import EmployeeDetails from './components/employee-detail'

import EmployeeService from './services/employee'

import './style/custom.scss'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      employees: [],
      initialState: [],
      specificEmployee: null,
      newEmployee: {}
    };
  }

  componentWillMount() {
    this.getEmployees()
  }
  
  getEmployees = () => 
    EmployeeService.get('http://dummy.restapiexample.com/api/v1/employees')
    .then( employees => this.setState({ employees: employees.reverse(), initialState: employees }) )

  postEmployees = data => 
    EmployeeService.post('http://dummy.restapiexample.com/api/v1/create', data)
    .then( res => this.getEmployees() )
    .then( () => this.setState({newEmployee: {}}) )
    .catch(error => { console.log(error.response) })


  filterEmployee = event => {
    const initialItems = this.state.initialState
    let value = event.target.value

    let employees = initialItems.filter( item =>
      item.employee_name.toLowerCase().search( value.toLowerCase() ) !== -1
    );
    
    this.setState({ employees });
  }

  detailEmployee = id => {
    let employee = this.state.initialState.filter( item => item.id === id )
    this.setState({specificEmployee: employee[0]})
    if(window.innerWidth < 992)window.scrollTo( 0, 0 );
  }

  addEmployee = e => {
    e.preventDefault()
    let data = {
      "name": this.state.newEmployee.name,
      "salary": this.state.newEmployee.salary,
      "age": this.state.newEmployee.age
    }
    this.postEmployees(data)
  }

  handleChange = event => {
    this.setState({ newEmployee: {...this.state.newEmployee, [event.target.name]: event.target.value }});
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <div className="app_container row no-gutters">
          <div className="col-12 col-lg-3 box-shadow bg-white">
            <AddNewEmployee
              AddEmployee={this.addEmployee}
              newEmployee={this.state.newEmployee}
              handleChange={this.handleChange}
            />
          </div>
          <div className="col-12 col-lg-3 order-md-last">
            <EmployeeDetails 
              employeeDetail={this.state.specificEmployee}
            />
          </div>
          <div className="col-12 col-lg-6">
            <ListEmployee 
              employees={this.state.employees}
              filter={this.filterEmployee}
              detail={this.detailEmployee}
              specificEmployee={this.state.specificEmployee}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
