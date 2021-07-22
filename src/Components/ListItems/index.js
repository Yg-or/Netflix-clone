import './style.css';
import CardItem from '../CardItem';

function ListItems({ itens }) {
    return <div className="listArea">
        <p className="title">{itens.title}</p>
        <div className="movieArea">
            {
                itens.items.map((filme) => {
                    return <CardItem key = {filme.key} filme = {filme}/>
                })
            }


        </div>
    </div>

}

export default ListItems;