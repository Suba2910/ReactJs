// ternary operator usage example, for CSS application, use && for if statements
export const AgeComparator = () => {
    const age = 15;
    const isGreen = false;
  
    return (
    <div className="App">
      {
        age >=18 ? <h1>OVER AGE</h1> : <h1>UNDER AGE</h1>
      }
      <h1 style={{color : isGreen ? 'green' : 'red'}}>THIS HAS COLOR</h1> 
      {isGreen && <button>Click ME !!</button>}
    </div>
    
    );
  }

  
