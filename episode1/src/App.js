import logo from './logo.svg';
import './App.css';


// Basic 
function App() {
  const name = <h1>Subalakshmi Shan </h1>;
  const age = <h2> 28 </h2>;
  const email = <h3>shansuba2013@gmail.com</h3>
  const user =(
  <div>
    {name} 
    {age} 
    {email}
  </div>
  );
  return (
    <div className="App">
     {user}
    </div>
  );
}


export default App


