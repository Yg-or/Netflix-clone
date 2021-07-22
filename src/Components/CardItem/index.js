import './style.css'
function CardItem({filme}) {
    return <img src = {filme.fundoPoster} alt = {filme.titulo} className = "poster"/>
}

export default CardItem;