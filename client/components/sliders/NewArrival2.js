import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation } from "swiper";
import { server } from "../../config/index";
import DailySliderSkeleton from "../elements/DailySliderSkeleton";
import { formattedPrice } from "../../util/util";
SwiperCore.use([Navigation]);

const NewArrival2 = () => {
  const [newArrival, setNewArrival] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    // With Category
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();

    const newArrivalProducts = allProducts?.products?.sort(function (a, b) {
      return a.created > b.created ? -1 : 1;
    });

    setNewArrival(newArrivalProducts.reverse());
    setLoading(false);
  };

  return (
    <>
      {loading
        ? Array(3)
            .fill()
            .map((_, index) => (
              <article className="row align-items-center hover-up" key={index}>
                <DailySliderSkeleton />
              </article>
            ))
        : newArrival.slice(0, 3).map((product, i) => (
            <article className="row align-items-center hover-up" key={i}>
              <figure className="col-md-4 mb-0">
                <Link href="/products/[slug]" as={`/products/${product.slug}`}>
                  <a>
                    <img src={product?.images[0]?.img} alt="" />
                  </a>
                </Link>
              </figure>
              <div className="col-md-8 mb-0">
                <h6>
                  <Link
                    href="/products/[slug]"
                    as={`/products/${product.slug}`}
                  >
                    <a>{product.title}</a>
                  </Link>
                </h6>
                <div className="product-rate-cover">
                  <div className="product-rate d-inline-block">
                    <div
                      className="product-rating"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="font-small ml-5 text-muted"> (4.0)</span>
                </div>
                <div className="product-price">
                  <span>{formattedPrice(product.price)} </span>
                  <span className="old-price">
                    {product.oldPrice && `${formattedPrice(product.oldPrice)}`}
                  </span>
                </div>
              </div>
            </article>
          ))}
    </>
  );
};

export default NewArrival2;
