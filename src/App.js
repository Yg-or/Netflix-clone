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
      let temp = await getData();
      setData(temp);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div className="App">
    <Header />
  </div>
  }

  return (
    <div className="App">
      <Header />
      <FirstArea filmes={data}/>
      {
        data.map((categoria) => {
          return <ListItems itens={categoria} key={categoria.slug} />
        })
      }
    </div>
  );
}

export default App;
