import { Tab } from "bootstrap"
import { useEffect, useState } from "react"

 export default function Tabs({children,activeTab}){
  
    const[active,setActive] = useState(activeTab) 

    useEffect(()=>{
        setActive(activeTab)

    },[activeTab])
    return(
    <>
    <nav>

    {children.map((tab,x)=>
    <button 
    onClick={()=> setActive(x)}
    className={active == x ? 'bg-green-200':'bg-yellow-200'} 
    key={x}>
        {tab.props.title}
    </button>)}
    </nav>
   
 {children[active]}
    </>
    
    )
  
}

Tab.Panel = function({ children }){
   
    return(
       
        <div>{children}</div>
        
    )
    }


