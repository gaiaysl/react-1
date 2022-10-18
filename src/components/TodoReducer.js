import {useReducer,useCallback,useMemo} from 'react'
import AddTodo from './AddTodo'
import HeaderMemo from './HeaderMemo'
import Todos from './Todos'

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
              case 'SET_SEARCH':
                return{
                    ...state,
                    search:action.value

                }
    
    }
    }
    function App(){

        console.log('render oluyor.')
    const[state,dispatch]=useReducer(reducer, {
        todos:[],
        todo: '',
        search:''
    })
    
    const submitHandle = useCallback(e =>{
        e.preventDefault()
        dispatch({
            type:'ADD_TODO',
            todo:state.todo
           })
    },[state.todo])
    //state erişmeye çalıştığı için [state.todo] olarak göndermeliyiz
    
    const onChange = useCallback(e =>{
    
       dispatch({
        type:'SET_TODO',
        value:e.target.value
       })
    },[])
    //yukarıda e olduğu için göndermene gerek yok ama diğerinde state olduğu 

    const searchHandle = e =>{
        dispatch({
            type:'SET_SEARCH',
            value:e.target.value
        })
    }

    //filtrelennmişleri getir diyoruz aşağıda
    const filteredTodos = useMemo (()=>{
        return state.todos.filter(todo=> todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
    },[state.todos,state.search])
    return(
        <>
 <h1 style={{fontSize:'20px', fontWeight:'bold',padding:'20px'}}> UseReducer Example</h1>
        <HeaderMemo />
       
        <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
        <input style={{border:'1px solid grey'}} value={state.search} type="text" placeholder='arama yapın' onChange={searchHandle} />
        <hr/>
        <Todos todos={filteredTodos}/>
    

   
  
        </>
    )
    }

export default App