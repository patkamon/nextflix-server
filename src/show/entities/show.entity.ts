export interface Show {
  id: string;
  name: string;
  backdropImage: string;
  image: string;
  description?: string;
  type?: 'anime' | 'tv' | 'movie';
  status?: ShowStatus;
  isTop10?: boolean;
  isNetflixOriginal?: boolean;
}

export type ShowStatus =
  | 'new'
  | 'popular'
  | 'trending'
  | 'upcoming'
  | 'classic';

export type ShowType = 'anime' | 'tv' | 'movie';
