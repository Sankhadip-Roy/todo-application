import { useState } from "react";
export function CreateTodo() {
    // have to do react-query

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <h2 style={{
            padding: 10,
            margin: 10
        }}>Add a new todo</h2>
        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={(e) => {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={(e) => {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // have to do axios 
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