
import { User } from './User';

//List of user Info stored in the array
export function UserApp(){
    const users = [
      {
        name:"Suba",
        age:28
      },
      {
        name:"Ananth",
        age:32
      },
      {
        name:"Subi",
        age:25
      },
      {
        name:"Vinay",
        age:29
      },
    ];
    return (
      <div className = "App">
        {
          users.map(
            (user,key) => {
              return <User name = {user.name} age={user.age}/>;
            }
          )
        }
      </div>
    );
  }
  