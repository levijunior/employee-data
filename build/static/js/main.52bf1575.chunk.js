(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),m=a(15),r=a.n(m),c=a(3),o=a(16),s=a(17),i=a(18),p=a(20),u=a(19),d=a(21),E=function(e){return n.a.createElement("div",{className:"app_container--new sticky-top padding-card"},n.a.createElement("h3",null,"Add new Employee"),n.a.createElement("section",{className:"add-employee mt-5 mb-4"},n.a.createElement("form",{onSubmit:e.AddEmployee},n.a.createElement("div",{className:"form-group mb-3"},n.a.createElement("label",{className:"m-0",htmlFor:"name"},n.a.createElement("small",null,"Name:")),n.a.createElement("input",{type:"text",className:"form-control",name:"name",required:!0,onChange:e.handleChange,value:e.newEmployee.name||""})),n.a.createElement("div",{className:"form-group mb-3"},n.a.createElement("label",{className:"m-0",htmlFor:"salary"},n.a.createElement("small",null,"Salary:")),n.a.createElement("input",{type:"text",className:"form-control",name:"salary",pattern:"^[0-9]+(\\.[0-9]{1,2})?$",required:!0,onChange:e.handleChange,value:e.newEmployee.salary||""})),n.a.createElement("div",{className:"form-group mb-3"},n.a.createElement("label",{className:"m-0",htmlFor:"age"},n.a.createElement("small",null,"Age:")),n.a.createElement("input",{type:"number",className:"form-control",name:"age",required:!0,onChange:e.handleChange,value:e.newEmployee.age||""})),n.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:e.disabled},"Send"))))},y=function(e){return n.a.createElement("div",{className:"app_container--list padding-card"},n.a.createElement("h2",null,"All employees"),n.a.createElement("section",{className:"search-employees mt-5 mb-4"},n.a.createElement("input",{className:"form-control form-control-lg",type:"text",placeholder:"Filter by name",onChange:e.filter})),n.a.createElement("section",{className:"list-employees"},n.a.createElement("div",{className:"table-responsive-md"},n.a.createElement("table",{className:"table table-hover"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"Name"),n.a.createElement("th",{scope:"col"},"Salary"),n.a.createElement("th",{scope:"col"},"Age"))),n.a.createElement("tbody",null,e.employees?e.employees.map(function(t){return n.a.createElement("tr",{key:t.id,onClick:function(){return e.detail(t.id)},className:null!==e.specificEmployee&&t.id===e.specificEmployee.id?"bg-info text-white":""},n.a.createElement("td",null,t.employee_name),n.a.createElement("td",null,"$",t.employee_salary),n.a.createElement("td",null,t.employee_age))}):n.a.createElement("tr",null))))))},f=function(e){return n.a.createElement("div",{className:"app_container--detail sticky-top padding-card"},n.a.createElement("h2",{className:"mb-5"},"Employee details"),e.employeeDetail?n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:e.employeeDetail.profile_image?e.employeeDetail.profile_image:"https://api.adorable.io/avatars/285/".concat(e.employeeDetail.employee_name,".png"),alt:"",className:"img-fluid img-thumbnail mb-3"}),n.a.createElement("p",{className:"h3 text-capitalize"},n.a.createElement("small",null,"Name: ")," ",n.a.createElement("span",{className:"text-info"},e.employeeDetail.employee_name)),n.a.createElement("p",{className:"h5"},n.a.createElement("small",null,"Salary: ")," ",n.a.createElement("span",{className:"text-info"},e.employeeDetail.employee_salary)),n.a.createElement("p",{className:"h5"},n.a.createElement("small",null,"Age: ")," ",n.a.createElement("span",{className:"text-info"},e.employeeDetail.employee_age)),n.a.createElement("p",null,n.a.createElement("small",null,"ID: ",e.employeeDetail.id))):n.a.createElement("small",null,"No employee has been selected."))},h=a(2),g=a.n(h),b=a(4),N=a(5),v=a.n(N),w={get:function(){var e=Object(b.a)(g.a.mark(function e(t){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(b.a)(g.a.mark(function e(t,a){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,a).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},x=(a(46),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).getEmployees=function(){return w.get("http://dummy.restapiexample.com/api/v1/employees").then(function(e){return a.setState({employees:e.reverse(),initialState:e})})},a.postEmployees=function(e){return w.post("http://dummy.restapiexample.com/api/v1/create",e).then(function(){return a.getEmployees()}).then(function(){return a.setState({newEmployee:{},disabled:!1})}).catch(function(e){console.log(e.response)})},a.filterEmployee=function(e){var t=a.state.initialState,l=e.target.value,n=t.filter(function(e){return-1!==e.employee_name.toLowerCase().search(l.toLowerCase())});a.setState({employees:n})},a.detailEmployee=function(e){var t=a.state.initialState.filter(function(t){return t.id===e});a.setState({specificEmployee:t[0]}),window.innerWidth<992&&window.scrollTo(0,0)},a.addEmployee=function(e){e.preventDefault(),a.setState({disabled:!0});var t={name:a.state.newEmployee.name,salary:a.state.newEmployee.salary,age:a.state.newEmployee.age};a.postEmployees(t)},a.handleChange=function(e){a.setState({newEmployee:Object(o.a)({},a.state.newEmployee,Object(c.a)({},e.target.name,e.target.value))})},a.state={employees:[],initialState:[],specificEmployee:null,newEmployee:{},disabled:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getEmployees()}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"app_container row no-gutters"},n.a.createElement("div",{className:"col-12 col-lg-3 box-shadow bg-white"},n.a.createElement(E,{AddEmployee:this.addEmployee,newEmployee:this.state.newEmployee,handleChange:this.handleChange,disabled:this.state.disabled})),n.a.createElement("div",{className:"col-12 col-lg-3 order-md-last"},n.a.createElement(f,{employeeDetail:this.state.specificEmployee})),n.a.createElement("div",{className:"col-12 col-lg-6"},n.a.createElement(y,{employees:this.state.employees,filter:this.filterEmployee,detail:this.detailEmployee,specificEmployee:this.state.specificEmployee}))))}}]),t}(l.Component));a(47);r.a.render(n.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.52bf1575.chunk.js.map