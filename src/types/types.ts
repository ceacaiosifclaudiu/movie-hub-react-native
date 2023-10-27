export type Movie = {
    id: number
    title: string
    poster_path: string
    release_date: string
    runtime: number
    overview: string
    genres: {
        id: number,
        name: string
    }[]
}

export type CastDetail = {
    character: string
    name: string
    profile_path: string
    cast_id: number
}

export type CastArray = {
    id: string
    name: string
    original_name: string
    profile_path: string
}[]

export type Item = {
    id: number;
    poster_path: string;
    title: string;
};

export type Person = {
    id: string;
    name: string;
    birthday: string;
    place_of_birth: string;
    profile_path: string;
    popularity: number;
    biography: string;
    gender: number;
    known_for_department: string;
};


export type ItemsState = {
    favoriteMovies: Movie[];
    favoriteActors: Person[];
    isActorFavorite: boolean
}

export type Results = {
    title: string
    poster_path: string
}
