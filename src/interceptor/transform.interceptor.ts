import {Injectable, NestInterceptor, ExecutionContext} from '@nestjs/common';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Reflector } from '@nestjs/core';
import {IHttpResponseSuccess, EHttpStatus, TMessage} from '@app/interface/http.interface'
// export interface Response < T > {
//   status: number;
//   result: T
// }

@Injectable()
export class TransformInterceptor < T > implements NestInterceptor < T,
IHttpResponseSuccess < T >> {
  constructor(private readonly reflector: Reflector) {}
  intercept(context : ExecutionContext, call$ : Observable < T >) : Observable < IHttpResponseSuccess < T >> {
    return call$.pipe(map((result: any) => {
      return { 
          status: EHttpStatus.Success,
          result,
          message: 'success'
        }
    }));
  }
}