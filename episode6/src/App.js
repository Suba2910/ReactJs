import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Text } from './Text';

//component lifecycle - mounting, updating and unmounting 
//when showText is true, we are mounting the text component(the input)
//and when entering text, the h1 tag of Text component is getting updated
//when showText is false, we are unmounting the text component
//this above concept is Useeffect hook. Useeffect example - when u want to
//fetch data from API and display on the UI (Mount). When u want to stop the request
//it is unmounting(kind of cleaning)
function App() {
  const[showText, setShowText] = useState(false);
 
  return (
    <div className='App'>
      <button onClick={() => {setShowText(!showText)}}> Show Text </button>
      {showText && <Text/>}
    </div>
  );
}

export default App


