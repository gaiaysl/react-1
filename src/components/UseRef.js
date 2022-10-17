
import { useRef} from 'react'
export default function UseRef(){

    //const Input = forwardRef((props,ref) =>{
       // return <input ref={ref} type="text" {... props}/>
   // })

    const inputRef = useRef()

    const fokuslaInput =()=>{

       inputRef.current.focus()
    }
    return(
        <div>
        <h1 style={{fontSize:'20px', fontWeight:'bold',padding:'20px'}}>UseRef örneğidir</h1>

        <input style={{border:'1px solid grey',margin:'3px'}} type="text" ref={inputRef} ></input>
       
      
        <button  style={{border:'1px solid grey',width:'60px',borderRadius:'4px'}} onClick={fokuslaInput}>Focus</button>
        </div>
    )
}