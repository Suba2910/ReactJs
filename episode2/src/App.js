import logo from './logo.svg';
import './App.css';


// Using component
//number should be in paranthesis
function App() {
  
  return (
    <div className="App">
     <GetUser name = "Subalakshmi Shan" age = {28} email="shansuba2013@gmail.com"/> 
     <GetJobInfo salary = {90000} designation = "Senior SDE" company = "Google"/>
     <GetUser name = "Ananth Palavesam" age = {32} email="ananth27@gmail.com"/>
     <GetJobInfo salary = {10000} designation = "Project Manager" company = "Infosys"/>
     <GetUser name = "Subhiksha" age = {25} email="shansubi2013@gmail.com"/>
     <GetJobInfo salary = {12000} designation = "Junior SDE" company = "Amazon"/>
    </div>
    
  );
}

//create a component called Job
const GetJobInfo = (props) => {
  return (
    <div>
      <h2> {props.salary} </h2>
      <h2> {props.designation} </h2>
      <h2> {props.company} </h2>
    </div>
  );
}

// create a component called user
const GetUser = (props) => {
  return (
  <div>
    <h1> {props.name} </h1>
    <h2> {props.age} </h2>
    <h3> {props.email} </h3>
  </div>
  );
}

/* // javascript function
const GetName = () =>{
  return "Subalakshmi Shan"
}

//react component
const GetNameComponent = () => {
  return <h1> Subalakshmi Shan </h1>
} */

export default App


