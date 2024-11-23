import { Inject, Injectable } from '@nestjs/common';
import { OPENAI_API } from './open_ai.interface';
import { OPENAI_CONFIG } from './open_ai.constant';

@Injectable()
export class OpenAIService {
  constructor(@Inject(OPENAI_CONFIG) private readonly config: OPENAI_API) {}

  async textEmbedding() {
    console.log(this.config.token);
    return 'openai';
  }
}
