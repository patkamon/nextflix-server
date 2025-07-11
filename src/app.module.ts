import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ShowController } from './show/show.controller';
import { ShowApiService } from './show/show.service';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    ConfigModule.forRoot({
      isGlobal: true, // make config available app-wide
    }),
    HttpModule,
  ],
  controllers: [AppController, ShowController],
  providers: [AppService, ShowApiService],
})
export class AppModule {}
