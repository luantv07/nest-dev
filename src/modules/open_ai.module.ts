import { DynamicModule, Module } from '@nestjs/common';
import { OpenAIController } from './open_ai.controller';
import { OpenAIService } from './open_ai.service';
import { OPENAI_API } from './open_ai.interface';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class OpenAIModule {
  static register(config: OPENAI_API): DynamicModule {
    return {
      module: OpenAIModule,
      providers: [OpenAIService],
      controllers: [OpenAIController],
    };
  }
}
