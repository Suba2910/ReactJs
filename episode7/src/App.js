import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { CatFact } from './CatFact';
import { PredictedAge } from './PredictedAge';
import { GenerateExcuse } from './GenerateExcuse';

//API fetching
function App() {

  //function to invoke API and get the response, but we would be using Axios
/*   fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {

    }); */

  const [catFact, setCatFact] = useState("");
  //API fetch without request
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    });
  };

  //as soon as the page is loaded, cat fact is available & onclick the function is invoked to change the cat fact
  //without useeffect , it will automatically generate infinite times
  useEffect(() => { fetchCatFact(); }, []);

  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const fetchPredictedAge = () => {// quotes used below are the one below ~ symbol
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  const [excuse,setExcuse] = useState("");

  const fetchExcuse = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  return (
    <div className='App'>
      <CatFact catFact={catFact} fetchCatFact={fetchCatFact} />
      <PredictedAge setName={setName} predictedAge={predictedAge} fetchPredictedAge={fetchPredictedAge} />
      <GenerateExcuse fetchExcuse = {fetchExcuse} excuse = {excuse} />
    </div>
  );
}

export default App


