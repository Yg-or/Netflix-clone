import './style.css';
import React, { useState } from 'react';
import CardItem from '../CardItem';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';





function ListItems({ itens }) {
    const [scroll, setScroll] = useState(0);

    function leftClick() {
        let x = scroll + Math.round(window.innerWidth/2);
        if (x > 0) {
            x=0;
        }
        setScroll(x)
    }

    function rightClick() {
        const filho = Math.ceil(document.getElementById('listaFilmes').firstChild.getBoundingClientRect().width) * 1.1;
        const tamanho = document.getElementById('listaFilmes').childElementCount * filho;
        let x = scroll - Math.round(window.innerWidth/2);
        if (window.innerWidth - tamanho > x) {
            x = window.innerWidth - tamanho -60;
        }
        setScroll(x)
    }



    return <div className="listArea">
        <p className="title">{itens.title}</p>


        <div className="leftIcon" onClick={leftClick}>
            <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="rightIcon" onClick={rightClick}>
            <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>

        <div id="listaFilmes" className="movieArea" style={{ 
            marginLeft: scroll
             
            }}>
            {
                itens.items.map((filme) => {
                    return <CardItem key={filme.key} filme={filme} />
                })
            }
        </div>
    </div>

}

export default ListItems;