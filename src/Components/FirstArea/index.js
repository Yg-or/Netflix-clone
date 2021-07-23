import './style.css'

function selectMovie(filmes) {
    if (!filmes) return;
    let aleatorio = Math.floor(Math.random() * filmes.items.length);
    for (let index = 0; index < 10; index += 1) {
        if (filmes.items[aleatorio].overview === '') {
            aleatorio = Math.floor(Math.random() * filmes.items.length)
        }
    }

    return(filmes.items[aleatorio])
}


function FirstArea({filmes}) {
    if (!filmes) return <></>
    const selecionado = selectMovie(filmes[0]);
    return <div className = "areaTotal"
     style={{
         "--img": `url(${selecionado.fundoImagem})`
        }}
     >
        <p className = "movieTitle">{selecionado.titulo}</p>
        <p className = "ratingAndRelease"><span className="rating">{selecionado.nota}</span> {selecionado.lancamento.split('-')[0]}</p>
        <p className = "overview">{selecionado.overview}</p>
        <div className = "btnArea">
            <nav className = "watchButton"><p>► Assistir</p></nav>
            <nav className = "listButton"><p>+ Minha Lista</p></nav>
        </div>
    </div>
}

export default FirstArea;