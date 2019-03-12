import { IsString } from "class-validator";

export  class CreateArticleDto {
  @IsString()
  readonly username: string;
  @IsString()
  readonly password: string;
}