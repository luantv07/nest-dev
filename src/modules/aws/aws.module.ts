import { DynamicModule, Module } from '@nestjs/common';
import { AwsController } from './aws.controller';
import { AwsService } from './aws.service';
import { AwsModuleAsyncOptions } from './aws.interface';
import { AWS_MODULE_PROVIDER } from './aws.constant';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AwsModule {
  static forRoot(options: AwsModuleAsyncOptions): DynamicModule {
    return {
      module: AwsModule,
      imports: [],
      providers: [
        AwsService,
        {
          provide: AWS_MODULE_PROVIDER,
          useFactory: options.useFactory,
          inject: options.inject || [],
        },
      ],
      controllers: [AwsController],
    };
  }
}
