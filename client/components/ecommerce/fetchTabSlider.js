import Link from "next/link";
import React, { useEffect, useState } from "react";
import { server } from "../../config/index";
import FeaturedSlider from "../sliders/Featured";
import TabSliderSkleton from "../elements/TabSliderSkeleton";
function FeatchTabSlider() {
  const [active, setActive] = useState("1");
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const featuredProduct = async () => {
    setLoading(true);
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const featuedItem = await allProducts?.products?.filter((item) => item);
    setFeatured(featuedItem);
    setActive("1");
    setLoading(false);
  };

  useEffect(() => {
    featuredProduct();
  }, []);

  return (
    <>
      <div className="section-title wow animate__animated animate__fadeIn">
        <h3 className="">Sản phẩm bán chạy trong ngày</h3>
      </div>

      <div className="row">
        <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn">
          <div className="banner-img style-2">
            <div className="banner-text">
              <h2 className="mb-100">Sản phẩm tự nhiên dành cho bạn</h2>

              <Link href="/products">
                <a className="btn btn-l">
                  Mua ngay <i className="fi-rs-arrow-small-right"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="tab-content wow fadeIn animated" id="myTabContent">
            <div
              className={
                active === "1" ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div
                className={
                  isMobile
                    ? "carausel-4-columns-cover card-product-small arrow-center position-relative"
                    : "carausel-4-columns-cover card-product-small arrow-center position-relative d-flex"
                }
              >
                {loading ? (
                  Array(4)
                    .fill()
                    .map((_, index) => (
                      <div className="skeleton">
                        <div style={{paddingLeft : '15px'}}>
                          <TabSliderSkleton key={index} />
                        </div>
                      </div>
                    ))
                ) : (
                  <FeaturedSlider products={featured} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeatchTabSlider;
