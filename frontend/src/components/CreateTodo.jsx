import { useState } from "react";
import '../App.css'
export function CreateTodo() {
    // have to do react-query

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <h2 className="borderLine text-teal-700 underline underline-offset-2">Add a new todo</h2>
        <input id="title" className="borderLine border-solid border-2 border-sky-500" type="text" placeholder="title" onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />

        <input id="desc" className="borderLine border-solid border-2 border-sky-500" type="text" placeholder="description" onChange={(e) => {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button className="borderLine text-neutral-950 border-solid border-2 border-sky-500 bg-slate-300" onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            }).then(async function (res) {
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button>
    </div>
}