import { useEffect,useState } from "react"

export default function (){

    const[postId,setPostId]=useState(1)
    const [post,setPost]=useState(false)
   
/*
useEffect(()=>{
    console.log('render oldu!')
   
})
 */

useEffect(()=>{
    
    console.log('component yüklendi')

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
   
    let interval = setInterval(()=> console.log('interval çalıştı'),1000)
return()=>{
    console.log('bitti')
    clearInterval(interval)
}
    
},[])


useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data) )
},[postId])

    return(
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <button style={{border:'1px solid grey',padding:'4px'}} 
            onClick={()=>setPostId(postId => postId+1)}>yeni konuya geç</button>
            
            <hr/>
            Test Component
            </div>
    )
}