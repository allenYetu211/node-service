import { Controller, Post, Body, Get, Res, Req, Query, HttpStatus, Param, NotFoundException, Put, Delete } from "@nestjs/common";

import {CreateTagDto} from 'src/modules/tag/dto/create-tag.dto'
import { TagService } from "src/modules/tag/tag.service";
import { ValidataObjectId } from "src/pipes/validate-object-id.pipe";

@Controller('tag')
export class TagController {

  constructor(private readonly tagService: TagService) {}
  // 添加tag
  @Post()
  public async addTag(@Res() res, @Body() createTagDto: CreateTagDto) {
    const addedTag = await this.tagService.addTag(createTagDto)
    return res.status(HttpStatus.OK).json({
      message: 'Tag has been successfully added!',
      tag: addedTag
    })
  }
  // 查找全部tag
  @Get()
  public async getTags(@Res() res) {
    const tags = await this.tagService.getTags()
    return res.status(HttpStatus.OK).json({tags})
  }
  //  查找单个tag
  @Get(':tagID')
  public async getTag(@Res() res, @Param('tagID', new ValidataObjectId()) tagID) {
    const fetchedTag = await this.tagService.getTag(tagID)
    if (!fetchedTag) {
      throw new NotFoundException('Tag does not exist!')
    }
    return res.status(HttpStatus.OK).json({fetchedTag})
  }

  // 修改tag
  @Put()
  public async updateTag(
    @Res() res,
    @Query('tagID', new ValidataObjectId()) tagID,
    @Body() createTagDto: CreateTagDto){
      const updateTag = await this.tagService.updateTag(tagID, createTagDto)
      if (!updateTag) {
        throw new NotFoundException('Tag does not exist!')
      }

      return res.status(HttpStatus.OK).json({
        message: 'Tag has been successfully updated!',
        tag: updateTag
      })
  }
  // 删除Tag
  @Delete()
  public async deleteTag(@Res() res, @Query('tagID', new ValidataObjectId()) tagID) {

    const deleteTag = await this.tagService.deleteTag(tagID)
    if (!deleteTag) {
      throw new NotFoundException('Tag does not exist!')
    }
    return res.status(HttpStatus.OK).json({
      message: 'Tag has been successfully deleted!!',
      movie: deleteTag
    })
  }
}