import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { OpenAIModule } from './modules/open_ai.module';
import { OpenAIService } from './modules/open_ai.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OpenAIModule.register({ token: process.env.OPENAI_API_KEY }),
  ],
  controllers: [AppController],
  providers: [AppService, OpenAIService],
})
export class AppModule {}
