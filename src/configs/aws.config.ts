import { registerAs } from '@nestjs/config';
import { AWS_CONFIG } from './const';

export default registerAs(AWS_CONFIG, () => {
  return {
    region: process.env.AWS_REGION,
  };
});
