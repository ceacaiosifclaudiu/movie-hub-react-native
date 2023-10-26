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

