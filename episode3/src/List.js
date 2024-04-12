//Understanding of List usage
export function List(){
    const names = ["Suba","Ananth","Subi","Vinay", "Shan", "Sumathi"];
    return <div className='App'>{
      names.map(
        (value,key) => {
          return <h1 key = {key}> {value}</h1>;
        }
      )
      }
    </div>;
  }