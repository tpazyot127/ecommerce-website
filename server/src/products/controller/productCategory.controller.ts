import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ProductCategoriesService } from "../services/productCategory.service";
import { ProductCategory } from "../schemas/productCategory.schema";
import { AdminGuard } from "src/guards/admin.guard";

@Controller("product-categories")
export class ProductCategoriesController {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService
  ) {}

  @Get()
  getAllCategories() {
    return this.productCategoriesService.findAll();
  }

  @Get(":id")
  getCategory(@Param("id") id: string) {
    return this.productCategoriesService.findById(id);
  }

  @UseGuards(AdminGuard)
  @Post()
  createCategory(@Body() category: Partial<ProductCategory>) {
    return this.productCategoriesService.create(category);
  }

  @UseGuards(AdminGuard)
  @Put(":id")
  updateCategory(
    @Param("id") id: string,
    @Body() category: Partial<ProductCategory>
  ) {
    return this.productCategoriesService.update(id, category);
  }

  @UseGuards(AdminGuard)
  @Delete(":id")
  deleteCategory(@Param("id") id: string) {
    return this.productCategoriesService.delete(id);
  }
}
