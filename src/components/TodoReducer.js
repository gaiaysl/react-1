import {useReducer} from 'react'

function reducer(state,action){
    switch(action.type){
    
        case 'SET_TODO':
            return{
                ...state,
                todo: action.value
    }
            case 'ADD_TODO':
                return{
                    ...state,
                    todo:'',
                    todos:[
                        ...state.todos,
                        action.todo
                    ]
    
                }
    
    }
    }
    function App(){
    const[state,dispatch]=useReducer(reducer, {
        todos:[],
        todo: ''
    })
    
    const submitHandle = e =>{
        e.preventDefault()
        dispatch({
            type:'ADD_TODO',
            todo:state.todo
           })
    }
    
    const onChange = e =>{
    
       dispatch({
        type:'SET_TODO',
        value:e.target.value
       })
    }
    return(
        <>
        <h1 style={{fontSize:'20px', fontWeight:'bold',padding:'20px'}}> UseReducer Example</h1>
    
    <form onSubmit={submitHandle}>
    <input style={{border:'1px solid grey'}} type="text" value={state.todo} onChange={onChange}/>
    <button style={{border:'1px solid grey',width:'50px', margin:'3px',borderRadius:'4px'}} disabled={!state.todo} type='submit'>Ekle</button>
    </form>
    <ul>
    {state.todos.map((todo,index)=>(
        <li key={index}>{todo}</li>
    ))}
    </ul>
        </>
    )
    }

export default App