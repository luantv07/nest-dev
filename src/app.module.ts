import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OpenAIModule } from './modules/open_ai/open_ai.module';
import { OpenAIService } from './modules/open_ai/open_ai.service';
import { AwsModule } from './modules/aws/aws.module';
import { AWS_CONFIG } from './configs/const';
import configs from './configs';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: configs,
    }),
    OpenAIModule.register({ token: 'sk-abc' }),
    AwsModule.forRoot({
      useFactory: (configService: ConfigService) => {
        const config = configService.get(AWS_CONFIG);
        if (!config) {
          throw new Error('Aws configuration not found');
        }
        return config;
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OpenAIService],
})
export class AppModule {}
