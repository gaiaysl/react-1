
import './App.css';


function App() {
  return (
    <div className="App">
      <h3>{process.env.NODE_ENV}</h3>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
     {process.env.NODE_ENV ==='production' &&(
      <img src="/logo512.png" />
     )}
   
    </div>
  );
}

export default App;
