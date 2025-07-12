import { Show, ShowStatus, ShowType } from '../../domain/entities/show.entity';
import { ShowApiDto } from '../dto/show.api.dto';

export class ShowMapper {
  static fromApi(
    dto: ShowApiDto,
    opts: {
      type: ShowType;
      isTop10: boolean;
      isNetflixOriginal: boolean;
      status: ShowStatus;
    },
  ): Show {
    const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL ?? '';
    const posterUrl = dto.poster_path
      ? `${IMAGE_BASE_URL}${dto.poster_path}`
      : 'default-poster.jpg';
    const backdropUrl = dto.backdrop_path
      ? `${IMAGE_BASE_URL}${dto.backdrop_path}`
      : 'default-backdrop.jpg';

    return {
      id: String(dto.id),
      name: dto.title,
      backdropImage: backdropUrl,
      image: posterUrl,
      description: dto.overview,
      type: opts.type,
      status: opts.status,
      isTop10: opts.isTop10,
      isNetflixOriginal: opts.isNetflixOriginal,
    };
  }
}
