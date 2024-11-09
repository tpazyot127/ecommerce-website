import { Module } from "@nestjs/common";
import { ProductsService } from "./services/products.service";
import { ProductsController } from "./controller/products.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./schemas/product.schema";
import {
  ProductCategory,
  ProductCategorySchema,
} from "./schemas/productCategory.schema";
import { ProductCategoriesService } from "./services/productCategory.service";
import { ProductCategoriesController } from "./controller/productCategory.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
      {
        name: ProductCategory.name,
        schema: ProductCategorySchema,
      },
    ]),
  ],
  providers: [ProductsService, ProductCategoriesService],
  controllers: [ProductsController, ProductCategoriesController],
})
export class ProductsModule {}
