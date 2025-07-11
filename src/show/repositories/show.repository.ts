import { Show } from '../entities/show.entity';

export abstract class ShowRepository {
  abstract getMovieList(): Promise<Show[]>;
}
