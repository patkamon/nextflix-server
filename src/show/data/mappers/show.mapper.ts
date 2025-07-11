import { Show, ShowStatus, ShowType } from '../../entities/show.entity';
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
    return {
      id: String(dto.id),
      name: dto.title,
      image: dto.backdrop_path,
      description: dto.overview,
      type: opts.type,
      status: opts.status,
      isTop10: opts.isTop10,
      isNetflixOriginal: opts.isNetflixOriginal,
    };
  }
}
