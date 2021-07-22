const baseApiUrl = 'https://api.themoviedb.org/3';
const API_KEY = '6f38b6b6f47f06d99cbba9581c5c00b3';
const baseUrlImages = 'https://image.tmdb.org/t/p/w300';

async function fetchAll(endpoint) {
    const response = await fetch(`${baseApiUrl}${endpoint}${API_KEY}`);
    const data = await response.json();
    const temp = data.results.map((filme) => {
        return {
            fundoImagem: `${baseUrlImages}${filme.backdrop_path}`,
            titulo: filme.name,
            overview: filme.overview,
            fundoPoster: `${baseUrlImages}${filme.poster_path}`,
            key: filme.id
        }
    });

    return temp;
}

async function getData() {
    return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            items: await fetchAll('/discover/tv/?with_network=213&language=pt-BR&api_key=')
        },
        {
            slug: 'tending',
            title: 'Recomendados para Você',
            items: await fetchAll('/trending/all/week?language=pt-BR&api_key=')
        },
        {
            slug: 'toprated',
            title: 'Em Alta',
            items: await fetchAll('/movie/top_rated?&language=pt-BR&api_key=')
        },
        {
            slug: 'action',
            title: 'Ação',
            items: await fetchAll('/discover/movie?with_genres=28&language=pt-BR&api_key=')
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            items: await fetchAll('/discover/movie?with_genres=35&language=pt-BR&api_key=')
        },
        {
            slug: 'horror',
            title: 'Terror',
            items: await fetchAll('/discover/movie?with_genres=27&language=pt-BR&api_key=')
        },
        {
            slug: 'romance',
            title: 'Romance',
            items: await fetchAll('/discover/movie?with_genres=10749&language=pt-BR&api_key=')
        },
        {
            slug: 'documentary',
            title: 'Documentários',
            items: await fetchAll('/discover/movie?with_genres=99&language=pt-BR&api_key=')
        },
    ];
}

export default getData;
