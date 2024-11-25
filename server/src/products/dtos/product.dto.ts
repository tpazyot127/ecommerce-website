import { IsString, IsNumber, IsArray, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

class ImageDto {
  @IsString()
  img: string;
}

class GalleryDto {
  @IsString()
  thumb: string;
}

export class ProductDto {
  @IsString()
  title: string;

  @IsNumber()
  price: number;

  @IsNumber()
  oldPrice: number;

  @IsString()
  desc: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageDto)
  @IsOptional()
  images?: ImageDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GalleryDto)
  @IsOptional()
  gallery?: GalleryDto[];

  @IsString()
  brand: string;

  @IsString()
  slug: string;

  @IsString()
  category: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  stock: number;
}
