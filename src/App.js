import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Tasks from './component/Tasks';
import AddTask from './component/AddTask';
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: "Doctor's Appointment",
    reminder: true,
    day: "Feb 5th at 12.30"
    }, 
    {
    id: 2,
    text: "Study",
    reminder: false,
    day: "Feb 5th at 2.30"
    }, 
])

//Add task

const addTask = (task) => {
  const id = Math.floor(Math.random()*100000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}



// Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((tasks)=>tasks.id !== id))
}

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd ={addTask}/>
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder}/>
    </div>
  );
}

export default App;
