import { Module } from "@nestjs/common";
import {LikeService} from './like.service'
import { LikeController } from "./like.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchemas } from "@app/modules/articles/schemas/article.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'article', schema: ArticleSchemas}])
  ],
  controllers: [LikeController],
  providers: [LikeService],
  exports: [LikeService]
})

export class LikeModules{}