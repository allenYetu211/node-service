export enum EHttpStatus {
  Error = 'error',
  Success =   'Success'
}

export type TMessage  = string

export interface IHttpResponseBase {
  status: EHttpStatus;
  message: TMessage;
}

export type IHttpResponseSuccess<T> = IHttpResponseBase & {
  result: T
}

