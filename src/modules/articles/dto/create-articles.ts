import { IsString, IsArray, IsBoolean } from "class-validator";

export  class CreateArticleDto {
  @IsString()
  readonly title: string;
  @IsArray()
  readonly tags: string[];
  @IsString()
  readonly interduce: string;
  @IsString()
  readonly content: string;
  @IsBoolean()
  readonly publishState: boolean;
  
}