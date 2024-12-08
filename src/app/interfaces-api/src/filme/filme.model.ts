export interface Filme{
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  media_type: 'movie';
}

export interface DetalheFilme extends Filme {

  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  runtime: number;

  status: string;
  tagline: string;

}

export interface SerieTV {
  id: number;
  adult: boolean;
  name: string;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  first_air_date: Date;
  media_type: 'tv';
}


// genero

export interface Genre {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  value: string;
}

export interface GenreEntity {
  genres: Genre[];
}

