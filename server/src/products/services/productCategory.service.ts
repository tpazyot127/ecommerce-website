import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import {
  ProductCategory,
  ProductCategoryDocument,
} from "../schemas/productCategory.schema";

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectModel(ProductCategory.name)
    private productCategoryModel: Model<ProductCategoryDocument>
  ) {}

  async create(
    category: Partial<ProductCategory>
  ): Promise<ProductCategoryDocument> {
    const createdCategory = await this.productCategoryModel.create(category);
    return createdCategory;
  }

  async findAll(): Promise<ProductCategoryDocument[]> {
    return this.productCategoryModel.find().exec();
  }

  async findById(id: string): Promise<ProductCategoryDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException("Invalid category ID.");

    const category = await this.productCategoryModel.findById(id);
    if (!category) throw new NotFoundException("No category with given ID.");

    return category;
  }

  async update(
    id: string,
    attrs: Partial<ProductCategory>
  ): Promise<ProductCategoryDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException("Invalid category ID.");

    const category = await this.productCategoryModel.findById(id);
    if (!category) throw new NotFoundException("No category with given ID.");

    Object.assign(category, attrs);
    return category.save();
  }

  async delete(id: string): Promise<void> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException("Invalid category ID.");

    const category = await this.productCategoryModel.findById(id);
    if (!category) throw new NotFoundException("No category with given ID.");

    await category.remove();
  }
}
