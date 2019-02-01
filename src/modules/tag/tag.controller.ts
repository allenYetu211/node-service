import { Controller, Post, Body, Get, Res, Req, Query, HttpStatus, Param, NotFoundException, Put, Delete } from "@nestjs/common";

import {CreateTagDto} from 'src/modules/tag/dto/create-tag.dto'
import { TagService } from "src/modules/tag/tag.service";
import { ValidataObjectId } from "src/pipes/validate-object-id.pipe";

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  // 添加tag
  @Post()
  public async addTag(@Body() createTagDto: CreateTagDto) {
    return await this.tagService.addTag(createTagDto)
  }
  // 查找全部tag
  @Get()
  public async getTags() {
    return await this.tagService.getTags()
  }
  //  查找单个tag
  @Get(':tagID')
  public async getTag( @Param('tagID', new ValidataObjectId()) tagID) {
    return await this.tagService.getTag(tagID)
  }

  // 修改tag
  @Put()
  public async updateTag(
    @Query('tagID', new ValidataObjectId()) tagID,
    @Body() createTagDto: CreateTagDto){
      return await this.tagService.updateTag(tagID, createTagDto)
  }

  // 删除Tag
  @Delete()
  public async deleteTag(@Query('tagID', new ValidataObjectId()) tagID) {
    return  await this.tagService.deleteTag(tagID)
  }
}