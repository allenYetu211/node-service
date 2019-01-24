import { IsString } from "class-validator";

export  class CreateTagDto {
  @IsString()
  readonly tag: string;
  @IsString()
  readonly type: string;

}