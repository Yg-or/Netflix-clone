async function getData() {
    const baseUrlImages = 'https://image.tmdb.org/t/p/w300';
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=6f38b6b6f47f06d99cbba9581c5c00b3&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    const dados = await response.json();

    const temp = dados.results.map((filme) => {
        return {
            fundoImagem: `${baseUrlImages}${filme.backdrop_path}`,
            titulo: filme.title,
            overview: filme.overview,
            fundoPoster: `${baseUrlImages}${filme.poster_path}`,
            lancamento: filme.release_date
        }
    });

    return temp;
}

export default getData;
