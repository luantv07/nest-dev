import { Injectable } from '@nestjs/common';
import { MyClass } from './decorator';

@Injectable()
export class AppService {
  getHello(): string {
    const obj = new MyClass();
    obj.myMethod({ name: 'Hello' });
    console.log(process.env.SECRET, 'eth');
    return 'Hello World!';
  }
}
