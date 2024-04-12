import { GasPlanet } from "./GasPlanet";

//Exercise to practice - to display only GasPlanet
export function Planet() {
    const planets = [
      {name : "Mars", isGasPlanet : false},
      {name : "Earth", isGasPlanet : false},
      {name : "Jupiter", isGasPlanet : true},
      {name : "Venus", isGasPlanet : false},
      {name : "Neptune", isGasPlanet : true},
      {name : "Uranus", isGasPlanet : true},
    ];
    return (
    <div className='App'>
      { // when {} is not used no need of return as below
        planets.map(
          (planet,key) => <GasPlanet name = {planet.name} isGasPlanet = {planet.isGasPlanet}/>
        )
      }
    </div>
    );
  }