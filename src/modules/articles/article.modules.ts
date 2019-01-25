import { Module } from "@nestjs/common";
import { ArticleController } from "./article.controller";
import { ArticleService } from "./article.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ArticleSchemas } from "./schemas/article.schemas";

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'article', schema: ArticleSchemas}])
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
  exports: [ArticleService]
})

export class ArticleModules{}
