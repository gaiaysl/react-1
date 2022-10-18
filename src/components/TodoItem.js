import {memo} from 'react'
function TodoItem({todo}){
    console.log('TODOItem rendered')
    return(
        <li >{todo}</li>
    )
}
export default memo(TodoItem)