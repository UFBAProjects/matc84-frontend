import { Filme, SerieTV } from "../filme/filme.model";

export type SearchMedia = {
  media_type: 'filme' | 'serie';
};

export type SearchResults = Filme | SerieTV ;
