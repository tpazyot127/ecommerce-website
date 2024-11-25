import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { BadRequestException } from '@nestjs/common';
import { AppService } from "./app.service";

@Controller("upload")
export class AppController {
  constructor(private appService: AppService) {}

  @Post("images")
  @UseInterceptors(FilesInterceptor("image", 10)) 
  async uploadFiles(@UploadedFiles() images: Express.Multer.File[]) {
    try {
      console.log("images", images);
      const uploadPromises = images.map((file) =>
        this.appService.uploadImageToCloudinary(file)
      );
      const responses = await Promise.all(uploadPromises);

      return responses.map((response) => response.url);
    } catch (error) {
      throw new BadRequestException("Invalid file type.", error);
    }
  }
}
