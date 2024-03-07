import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }

  sayHi(): string {
    return 'Hi~ i am a nest student';
  }

  likeThis(): string { 
    return 'i love this class';
  }
}