import * as mongoose from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../users/schemas/user.schema";

export type ProductDocument = Product & mongoose.Document;
export interface Image {
  img: string;
}
export interface Gallery {
  thumb: string;
}

export interface Discount {
  banner : string;
  percentage : number;
  expireDate : Date;
  isActive : boolean;
}
@Schema({ timestamps: true })
export class Review {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    default: null,
  })
  user: User;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  comment: string;
}

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  slug: string;

  @Prop()
  moreLove: boolean;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true, type: [] })
  images: Image[];

  @Prop({ required: true, type: [] })
  gallery: Gallery[];

  @Prop({type : []})
  discount : Discount[];
  
  @Prop({ required: true })
  desc: string;

  @Prop()
  condition: string;

  @Prop({ required: true })
  reviews: Review[];

  @Prop({ default: 0 })
  rating: number;

  @Prop({ required: true, default: 0 })
  numReviews: number;

  @Prop({ required: true, default: 0 })
  price: number;

  @Prop({ required: true, default: 0 })
  oldPrice: number;

  @Prop({ required: true, default: 0 })
  totalSell: number;

  @Prop({ default: false })
  featured : boolean;

  @Prop({ default: false })
  trending : boolean;

  @Prop({ required: true, default: 0 })
  stock: number;

  @Prop({ required: true, default: 0 })
  weight: number;

  @Prop({ default: 0 })
  ratingScore: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
