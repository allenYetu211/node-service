import { IsString } from "class-validator";

export class CreateCommentDto {
  @IsString()
  readonly pid: string;
  
  @IsString()
  readonly connent: string;

  @IsString()
  readonly articleId: string
}