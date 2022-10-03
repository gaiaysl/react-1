
import Test from './Test'
import styles from "./App.module.css"
import { Title } from "./Components"
import Boostrap from './Boostrap';

import './Tailwind.css'
import Tailwind from './Tailwind';

function App() {
  return (
    <div className={styles.App}>
      <Title>title denemesidir</Title>
      <Title theme="dark">title denemesidir</Title>
      <h3>{process.env.NODE_ENV}</h3>
      
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      
      <Test />
      
     {process.env.NODE_ENV ==='production' &&(
      <img src="/logo512.png" />
     )}

  
      <Boostrap />
      <Tailwind />
    </div>
  );
}

export default App;
