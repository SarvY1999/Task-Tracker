import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Tasks from './component/Tasks';
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

// Delete task

const deleteTask = (id) => {
  setTasks(tasks.filter((tasks)=>tasks.id !== id))
}

// Toggle Reminder 
// come back tommorrow

  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
