import { useState } from 'react';

//Example for useState, it checks for the cjange in variable; if yes it re-renders the UI again
export function AgeIncrementor() {
  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge(age+1);
  };

  return <div className='App'> {age} <button onClick={incrementAge}>Increase Age</button></div>;
  

}