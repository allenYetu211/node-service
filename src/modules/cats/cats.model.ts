import {Types} from 'mongoose'
import { prop, plugin, pre, Typegoose } from 'typegoose';
import { IsString, IsInt, IsIn, IsDefined, IsNotEmpty, IsArray, ArrayNotEmpty, ArrayUnique } from 'class-validator';
import { prependOnceListener } from 'cluster';

export class Cats extends Typegoose {
  @prop()
  name: string;

  @prop()
  age: Number
}
