import './App.css';
import React, { useState, useEffect } from 'react';
import getData from './getData';
import Header from './Components/Header';
import FirstArea from './Components/FirstArea';
import ListItems from './Components/ListItems';

function App() {
  const [data, setData] = useState();
  const [principal, setPrincipal] = useState();
  const [black, setBlack] = useState('');

  useEffect(() => {
    
    
    async function fetchData() {
      let temp = await getData();
      setData(temp);
      setPrincipal(temp)
    }

    fetchData();
  }, []);

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 20) {
        setBlack('black')
      } else {
        setBlack('')
      }
    }
    
    window.addEventListener('scroll', scrollListener);

    

  });

  if (!data && !principal) {
    return <div className="App">
    <Header black={black}/>
  </div>
  }

  return (
    <div className="App">
      <Header black={black}/>
      <FirstArea filmes={principal}/>
      {
        data.map((categoria) => {
          return <ListItems itens={categoria} key={categoria.slug} />
        })
      }
    </div>
  );
}

export default App;
