import logo from './logo.svg';
import './App.css';
import { AgeIncrementor } from './AgeIncrementor';
import { InputDisplay } from './InputDisplay';
import { ShowHide, ColorChange } from './ShowHide';
import { Counter } from './Counter';
//Example for useState, it checks for the cjange in variable; if yes it re-renders the UI again
function App() {
  return (
    <>
    <AgeIncrementor/>
    <InputDisplay/>
    <ShowHide/>
    <ColorChange/>
    <Counter/>
    </>
  );

}

export default App


