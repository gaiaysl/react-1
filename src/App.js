import './Tailwind.css'
import Button from './components/Button'
import Tabs from './components/Tabs'
import { Tab } from 'bootstrap'
import { useState,useReducer } from 'react'
import Test from './components/lifecycle/Test'
import UseRef from './components/UseRef'
import TodoReducer from './components/TodoReducer'


function App() {
 
  
  const todo = ['todo1','todo2','todo3']


  const searchFunction = ()=>{
alert('başardın!!')
  }

  //button componenti
  const[activeTab,setActiveTab] = useState(1)
  const[show,setShow]=useState(false)

  return (
   <>
    
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
   <div style={{padding:'20px'}}>
   <Button>
    deneme
   </Button>
   <Button variant="success">
    deneme
   </Button>
   <Button variant="danger">
    deneme
   </Button>
   <Button variant="warning">
    deneme
   </Button>
   </div>
   <div style={{padding:'20px'}}>
    <h1 style={{fontSize:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>Tab Example</h1>
    <button onClick={()=>setActiveTab(2)} >Aktif Tabı değiştir</button>
   <Tabs activeTab={activeTab}>
  <Tab.Panel  title="Profil">1.Panel Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</Tab.Panel>
  <Tab.Panel title="Hakkında">2.panel Lorem ipsum dolor sit amet, consectetur adipiscing elit, </Tab.Panel>
  <Tab.Panel title="Ayarlar">3.panel Lorem ipsum dolor sit amet, </Tab.Panel>
 </Tabs>
   </div>
 <div style={{padding:'20px'}}>
 <div  style={{fontSize:'20px',fontWeight:'bold',fontFamily:'sans-serif'}}>LifeCycle Example </div> 
  <button style={{border:'1px solid grey',borderRadius:'4px',width:'80px',backgroundColor:'lightgrey'}} onClick={()=>setShow(show=>!show)}>{show ? 'Gizle' : 'Göster'}</button>
{show && <Test />}
</div>

<UseRef />
<TodoReducer/>
   
   </>
    
  );
}

export default App;
