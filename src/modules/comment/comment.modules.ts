import { Module } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { CommentController } from "./comment.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CommentSchemase } from "./schemas/comment.schemas";

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'comment', schema: CommentSchemase}])
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports:[CommentService]
})

export class CommentModules{}