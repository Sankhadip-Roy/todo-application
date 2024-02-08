import { useState, useEffect } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  // fixed infinite fetch using useEffect
  useEffect(() => {
    setInterval(() => {
      try {
        fetch("http://localhost:3000/todos").then(async (res) => {
          const json = await res.json();
          setTodos(json.todos);
        })
      }
      catch (e) {
        console.log(e.message);
      }
    }, 1000);
  }, [])

  return (
    <div className='flex' >
      <div className='flex-1 w-80'>
        <Todos todos={todos}></Todos>
      </div>
      <div className='flex-1 w-20'>
        <CreateTodo></CreateTodo>
      </div>
    </div>
  )
}

export default App
