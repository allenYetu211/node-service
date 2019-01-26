import { IsString } from "class-validator";

export  class CreateTagDto {
  @IsString()
  readonly msg: string;
  @IsString()
  readonly type: string;

}