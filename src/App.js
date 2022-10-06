import './style.scss'

function App() {
  
  const todo = ['todo1','todo2','todo3']
  const searchFunction = ()=>{
alert('başardın!!')
  }
  return (
   <main>
    <h1 tabIndex="1"  onClick={()=> alert('merhaba')}>Gaye Yanardag</h1>
<label htmlFor='search' onClick={searchFunction}>
  arama
  <input  tabIndex="2" id='search'></input>
</label>
   <ul>
    {todo.map((t,index)=>(
      <li key={index}>{t}</li>
    ))}
   </ul>
   </main>
    
  );
}

export default App;
