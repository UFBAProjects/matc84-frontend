import { Filme, DetalheFilme, Genre } from './../interfaces-api/src/filme/filme.model';

export const mockFilme: Filme = {
  id: 1,
  title: 'Example Movie',
  original_title: 'Example Movie Original',
  poster_path: '/path/to/poster.jpg',
  adult: false,
  overview: 'This is an example movie overview.',
  release_date: new Date('2023-10-01'),
  genre_ids: [1, 2, 3],
  original_language: 'en',
  backdrop_path: '/path/to/backdrop.jpg',
  popularity: 100.0,
  vote_count: 1000,
  video: false,
  vote_average: 8.5,
  media_type: 'movie'
};

export const mockDetalheFilme: DetalheFilme = {
  ...mockFilme,
  budget: 100000000,
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' }
  ],
  homepage: 'https://example.com',
  imdb_id: 'tt1234567',
  runtime: 120,
  status: 'Released',
  tagline: 'This is an example tagline.'
};


export const mockGenres: Genre[] = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Adventure' },
  { id: 3, name: 'Comedy' }
];
