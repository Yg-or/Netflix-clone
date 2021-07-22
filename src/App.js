import './App.css';
import React, { useState, useEffect } from 'react';
import getData from './getData';
import Header from './Components/Header';
import FirstArea from './Components/FirstArea';
import ListItems from './Components/ListItems';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setData(await getData())
    }

    fetchData();
  }, []);


  if (!data) {
    return <div className="loading">
      <img src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' />
    </div>
  }

  return (
    <div className="App">
      <Header />
      <FirstArea />
      {
        data.map((categoria) => {
          return <ListItems itens={categoria} key={categoria.slug} />
        })
      }
    </div>
  );
}

export default App;
