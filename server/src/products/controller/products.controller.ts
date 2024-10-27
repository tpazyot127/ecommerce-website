import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
    Session,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { AdminGuard } from "src/guards/admin.guard";
import { AuthGuard } from "src/guards/auth.guard";
import { ProductDto } from "../dtos/product.dto";
import { ReviewDto } from "../dtos/review.dto";
import { ProductsService } from "../services/products.service";
import { AppService } from "src/app.service";
import { Gallery, Image } from "../schemas/product.schema";

@Controller("products")
export class ProductsController {
    constructor(
        private productsService: ProductsService,
        private appService: AppService
    ) {}

    @Get()
    getProducts(
        @Query("keyword") keyword: string,
        @Query("pageId") pageId: string
    ) {
        return this.productsService.findMany(keyword, pageId);
    }

    @Get("topRated")
    getTopRatedProducts() {
        return this.productsService.findTopRated();
    }

    @Get(":id")
    getProduct(@Param("id") id: string) {
        return this.productsService.findById(id);
    }

    @UseGuards(AdminGuard)
    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        return this.productsService.deleteOne(id);
    }

    @Post("create")
    @UseInterceptors(FilesInterceptor("images"))
    async createProduct(
        @Body() body: any,
        @UploadedFiles() images: Express.Multer.File[]
    ) {
        const imageUrls: Image[] = await Promise.all(
            images.map(async (image) => {
                const res = await this.appService.uploadImageToCloudinary(
                    image
                );

                return { img: res.url };
            })
        );

        return this.productsService.create({
            ...body,
            images: imageUrls,
        });
    }

    @Post("createMany")
    createProducts(@Body() products: any) {
        return this.productsService.createMany(products);
    }

    @UseGuards(AdminGuard)
    @Put(":id")
    updateProduct(@Param("id") id: string, @Body() product: ProductDto) {
        return this.productsService.update(id, product);
    }

    @UseGuards(AuthGuard)
    @Put(":id/review")
    createReview(
        @Param("id") id: string,
        @Body() { rating, comment }: ReviewDto,
        @Session() session: any
    ) {
        return this.productsService.createReview(
            id,
            session.user,
            rating,
            comment
        );
    }
}
