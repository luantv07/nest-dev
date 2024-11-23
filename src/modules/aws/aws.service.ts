import { Inject, Injectable } from '@nestjs/common';
import { AWS_MODULE_PROVIDER } from './aws.constant';
import { AwsOption } from './aws.interface';

@Injectable()
export class AwsService {
  constructor(
    @Inject(AWS_MODULE_PROVIDER) private readonly option: AwsOption,
  ) {}

  s3() {
    return this.option.region;
  }
}
