
import { memo} from 'react'

function AddTodo({submitHandle,todo,onChange}){
    console.log('ADDTODO rendered')
    return(

        <form onSubmit={submitHandle}>
        <input style={{border:'1px solid grey'}} type="text" value={todo} onChange={onChange}/>
        <button style={{border:'1px solid grey',width:'50px', margin:'3px',borderRadius:'4px'}} disabled={!todo} type='submit'>Ekle</button>
        </form>

    )
}
export default memo (AddTodo)