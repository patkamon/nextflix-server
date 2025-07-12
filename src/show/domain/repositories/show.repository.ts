import { Show } from '../../domain/entities/show.entity';

export abstract class ShowRepository {
  abstract getMovieList(): Promise<Show[]>;
  abstract getMovieById(id: string): Promise<Show | null>;
}
