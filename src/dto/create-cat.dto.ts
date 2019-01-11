/**
 * @file:
 * @module: cat dto
 * @author:  Allen OYang https://github.com/allenYetu211
 */

import {IsString, IsInt} from 'class-validator'

export class CreateCatDto {
  @IsString()
  readonly name : string;
  @IsInt()
  readonly age : number;
  @IsString()
  readonly breed : string;
}