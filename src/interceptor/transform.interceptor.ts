import {Injectable, NestInterceptor, ExecutionContext} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import {IHttpResponseSuccess, EHttpStatus, TMessage} from 'src/interface/http.interface'
// export interface Response < T > {
//   status: number;
//   result: T
// }

@Injectable()
export class TransformInterceptor < T > implements NestInterceptor < T,
IHttpResponseSuccess < T >> {
  constructor(private readonly reflector: Reflector) {}
  intercept(context : ExecutionContext, call$ : Observable < T >) : Observable < IHttpResponseSuccess < T >> {
    console.log(this.reflector)
    console.log('context::', context.getHandler())
    return call$.pipe(map((result: any) => {
      console.log('result::', result)
      return { 
          status: EHttpStatus.Success,
          result,
          message: 'success'
        }
    }));
  }
}