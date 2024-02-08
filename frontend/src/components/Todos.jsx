import '../App.css';
import axios from 'axios';
export function Todos({ todos }) {
    return <div>
        <h2 className="borderLine text-teal-700 underline underline-offset-2"> All Todos</h2>
        {todos.map((todo) => {
            return <div className='border-solid border-2'>
                <h1 className="borderLine text-neutral-950" >Title: {todo.title}</h1>

                <h2 className="borderLine text-neutral-950" >Description: {todo.description}</h2>

                <button className="borderLine text-neutral-950 border-solid border-2 border-sky-500 bg-slate-300"
                    onClick={async () => {
                        try {
                            const contentLength = JSON.stringify({ completed: true }).length;
                            await axios.put(`http://localhost:3000/completed`,
                                {
                                    id: todo._id,
                                    completed: !todo.completed
                                }
                                , {
                                    headers: {
                                        'Content-Length': contentLength
                                    }
                                })
                        } catch (error) {
                            console.error(error);
                        }
                    }}
                >{todo.completed == true ? "completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div >
}