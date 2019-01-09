/**
 * @file: 
 * @module:  app service
 * @author:  Allen OYang https://github.com/allenYetu211
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
