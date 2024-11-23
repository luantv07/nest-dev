import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenAIService {
  async textEmbedding() {
    return 'openai';
  }
}
