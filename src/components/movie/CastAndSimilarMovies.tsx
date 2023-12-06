import React from 'react';
import { Movie, Nav, Person } from '../../types/types';
import Cast from '../Cast';
import MovieList from '../MovieList';

const CastAndSimilarMovies = ({ cast, similarMovies, nav }: { cast: Person[]; similarMovies: Movie[]; nav: Nav }) => (
    <>
        {cast.length > 0 && <Cast cast={cast} nav={nav} />}
        {similarMovies.length > 0 && <MovieList title="Similar Movies" data={similarMovies} hideSeeAll />}
    </>
);

export default CastAndSimilarMovies

