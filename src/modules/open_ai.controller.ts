import { Controller, Get } from '@nestjs/common';
import { OpenAIService } from './open_ai.service';

@Controller()
export class OpenAIController {
  constructor(private readonly openAIService: OpenAIService) {}

  @Get('openai')
  async textEmbedding() {
    return this.openAIService.textEmbedding();
  }
}
