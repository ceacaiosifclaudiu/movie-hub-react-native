import React from 'react';
import { ScrollView, View } from 'react-native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from "../api/MovieDB";
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import TrendingMovies from '../components/TrendingMovies';
import { backgroundColor } from '../commonStyle';
import { Movie } from '../types/types';

const HomeScreen = () => {
    const [trending, setTrending] = React.useState<Movie[]>([]);
    const [upcoming, setUpcoming] = React.useState<Movie[]>([]);
    const [topRated, setTopRated] = React.useState<Movie[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await Promise.all([getTrendingMovies(), getUpcomingMovies(), getTopRatedMovies()]);
        setLoading(false);
    };

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        if (data && data.results) setTrending(data.results)
        setLoading(false)
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        if (data && data.results) setUpcoming(data.results)
    }

    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        if (data && data.results) setTopRated(data.results)
    }

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <HeaderHomeScreen />

            {
                loading ?
                    <Loading />
                    :
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            trending.length > 0 &&
                            <TrendingMovies trending={trending} />
                        }

                        <MovieList title='Upcoming' data={upcoming} />

                        <MovieList title='Top Rated' data={topRated} />
                    </ScrollView>
            }

        </View>
    )
}

export default HomeScreen
