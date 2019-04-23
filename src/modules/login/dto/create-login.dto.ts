import { IsString } from "class-validator";

export  class CreateLoginDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly password: string;

}