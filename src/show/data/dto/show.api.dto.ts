export interface ShowApiDto {
  id: string;
  title: string;
  backdrop_path: string;
  overview?: string;
  type?: 'anime' | 'tv' | 'movie';
  status?: 'new' | 'popular' | 'trending' | 'upcoming' | 'classic';
  isTop10?: boolean;
  isNetflixOriginal?: boolean;
}
