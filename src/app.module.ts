import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesControllerController } from './controllers/cities-controller/cities-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, CitiesControllerController],
  providers: [AppService],
})
export class AppModule {}
