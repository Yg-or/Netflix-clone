import './App.css';
import React, {useState, useEffect} from 'react';
import getData from './getData';

//url base poster 



function App() {

  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setData(await getData())
    }
    
    fetchData();
  }, []);


  if (!data) {
    return <div className="App">
    <p>Carregando</p>
  </div>
  }

  return (
    <div className="App">
      <p>Carregou</p>
    </div>
  );
}

export default App;
