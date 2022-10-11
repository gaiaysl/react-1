import { useEffect, useState } from "react"

export default function UseReducer(){

  

    const[todos,setTodos]=useState([])
    const[todo,setTodo]=useState()

    const submitHandle = e =>{
        e.preventDefault()
        setTodos([...todos,todo])
        setTodo('')
    }
    return(
        <>
        <h1 style={{fontSize:'20px', fontWeight:'bold',padding:'20px'}}> UseReducer Example</h1>

<form onSubmit={submitHandle}>
    <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/>
    <button disabled={!todo} type='submit'>Ekle</button>
</form>
<ul>
    {todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
    ))}
</ul>
        </>
    )
}
