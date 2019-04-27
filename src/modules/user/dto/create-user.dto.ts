import { IsString } from "class-validator";

export  class CreateUserDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly password: string;

}