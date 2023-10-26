import axios from "axios";

const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWIzZTdkMDRhMWJmNWRjNGI1Y2Q0NjgxODY2MzQ4ZiIsInN1YiI6IjY1MmNmOTQ5MDI0ZWM4MDBlNDQ1ZjZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RQOgd5rgjzPkJ8UVOMrYtPxgJZ7kYlMgR18-aepYC84'
const apiBaseUrl = 'https://api.themoviedb.org/3'
const trendingMoviesEndpoint = 'https://api.themoviedb.org/3/trending/movie/day';
const upcomingMoviesEndPoint = `https://api.themoviedb.org/3/movie/upcoming`;
const topRatedMoviesEndPoint = `https://api.themoviedb.org/3/movie/top_rated`;

const movieDetailsEndpoint = (id: number) => `https://api.themoviedb.org/3/movie/${id}`
const movieCreditsEndpoint = (id: number) => `https://api.themoviedb.org/3/movie/${id}/credits`
const similarMoviesEndpoint = (id: number) => `https://api.themoviedb.org/3/movie/${id}/similar`
const personDetailsEndpoint = (personId: number) => `https://api.themoviedb.org/3/person/${personId}`
const personMoviesEndpoint = (personId: number) => `https://api.themoviedb.org/3/person/${personId}/movie_credits`
const searchMovieEndpoint = 'https://api.themoviedb.org/3/search/movie'

export const image500 = (path: any) => path ? `https://image.tmdb.org/t/p/w500${path}` : null;
export const image342 = (path: any) => path ? `https://image.tmdb.org/t/p/w342${path}` : null;
export const image185 = (path: any) => path ? `https://image.tmdb.org/t/p/w185${path}` : null;

export const fallbackMoviePoster = 'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

const apiCall = async ({ endpoint, params }: any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : { language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error:', error)
        return {}
    }
}

const apiCallP = async ({ endpoint, id }: any) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: { query: id, include_adult: 'false', language: 'en-US', page: '1' },
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${apiKey}`
        }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('error:', error)
        return {}
    }
}

export const fetchTrendingMovies = () => {
    return apiCall({ endpoint: trendingMoviesEndpoint });
}

export const fetchUpcomingMovies = () => {
    return apiCall({ endpoint: upcomingMoviesEndPoint });
}

export const fetchTopRatedMovies = () => {
    return apiCall({ endpoint: topRatedMoviesEndPoint });
}

export const fetchMovieDetails = (id: number) => {
    const endpoint = movieDetailsEndpoint(id);
    return apiCall({ endpoint, id });
}

export const fetchMovieCredits = (id: number) => {
    const endpoint = movieCreditsEndpoint(id)
    return apiCall({ endpoint, id });
}

export const fetchSimilarMovies = (id: number) => {
    const endpoint = similarMoviesEndpoint(id)
    return apiCall({ endpoint, id });
}

export const fetchPersonDetails = (id: number) => {
    const endpoint = personDetailsEndpoint(id)
    return apiCallP({ endpoint, id })
}

export const fetchPersonMovies = (id: number) => {
    const endpoint = personMoviesEndpoint(id)
    return apiCallP({ endpoint, id })
}

export const searchMovies = (params: any) => {
    return apiCall({ endpoint: searchMovieEndpoint, params });
}