import { Controller, Get, Param } from '@nestjs/common';
import { ShowApiService } from './show.service';
import { Show } from './entities/show.entity';

@Controller('show')
export class ShowController {
  constructor(private readonly showService: ShowApiService) {}

  @Get('movie_list')
  async getMovieList(): Promise<Show[]> {
    return this.showService.getMovieList();
  }

}
