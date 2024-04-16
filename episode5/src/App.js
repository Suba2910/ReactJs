import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [textColor, setTextColor] = useState("black");
  const handle = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    //directly push does not work so create a new arraylist and add the new element and set it 
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  // for delete task we use filter
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id) {
        return {...task,completed : true}; // use ... to append in react
      } else {
        return task;
      }
    }));
  };


  return (<div className='App'>
    <div className='addTask'>
      <input onChange={handle} />
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className='list'>
      {todoList.map((task) => {
        return ( 
        <Task
          id={task.id}
          taskName={task.taskName}
          deleteTask={deleteTask}
          completeTask = {completeTask}
          completed = {task.completed}
        />
        );

      })}
    </div>

  </div>
  );
}

export default App


