import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/MovieDB';
import { backgroundColor } from '../commonStyle';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import Loading from '../components/Loading';
import MovieList from '../components/MovieList';
import TrendingMovies from '../components/TrendingMovies';
import { Movie } from '../types/types';

const HomeScreen = () => {
    const [trending, setTrending] = useState<Movie[]>([]);
    const [upcoming, setUpcoming] = useState<Movie[]>([]);
    const [topRated, setTopRated] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [trendingData, upcomingData, topRatedData] = await Promise.all([
                    fetchTrendingMovies(),
                    fetchUpcomingMovies(),
                    fetchTopRatedMovies(),
                ]);

                setTrending(trendingData.results || []);
                setUpcoming(upcomingData.results || []);
                setTopRated(topRatedData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: backgroundColor }}>
            <HeaderHomeScreen />

            {loading ? (
                <Loading />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {trending.length > 0 && <TrendingMovies trending={trending} />}

                    <MovieList title="Upcoming" data={upcoming} />

                    <MovieList title="Top Rated" data={topRated} />
                </ScrollView>
            )}
        </View>
    );
};

export default HomeScreen;
