import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

import { ShowApiDto } from './data/dto/show.api.dto';
import { ShowMapper } from './data/mappers/show.mapper';
import { Show } from './domain/entities/show.entity';
import { ShowRepository } from './domain/repositories/show.repository';
import { randomBoolean, randomShowStatus } from './domain/utils/random';

@Injectable()
export class ShowApiService implements ShowRepository {
  private readonly API_URL = 'https://api.themoviedb.org/3';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getMovieList(): Promise<Show[]> {
    const token = this.configService.get<string>('API_TOKEN');
    const response = await firstValueFrom(
      this.httpService.get<{ results: ShowApiDto[] }>(
        this.API_URL + '/discover/movie',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ),
    );
    const shows = response.data.results;
    return shows.map((dto: ShowApiDto) =>
      ShowMapper.fromApi(dto, {
        // business logic
        type: 'movie',
        isTop10: randomBoolean(dto.id, [0, 1]),
        isNetflixOriginal: randomBoolean(dto.id, [5, 6, 8]),
        status: randomShowStatus(dto.id),
      }),
    );
  }

  async getMovieById(id: string): Promise<Show | null> {
    const token = this.configService.get<string>('API_TOKEN');
    const response = await firstValueFrom(
      this.httpService.get<ShowApiDto>(this.API_URL + `/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    );
    return ShowMapper.fromApi(response.data, {
      // business logic
      type: 'movie',
      isTop10: randomBoolean(response.data.id, [0, 1]),
      isNetflixOriginal: randomBoolean(response.data.id, [5, 6, 8]),
      status: randomShowStatus(response.data.id),
    });
  }
}
