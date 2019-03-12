import {Document} from 'mongoose'


export interface  Auth extends Document{
  readonly username: string;
  readonly password: string;
}