export interface AwsOption {
  region: string;
}

export interface AwsModuleAsyncOptions {
  useFactory: (...args: any[]) => Promise<AwsOption> | AwsOption;
  inject?: any[];
}
