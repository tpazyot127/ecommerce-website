import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import { server } from "../../config/index";
import FeaturedSlider from "../sliders/Featured";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);

    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProduct = async () => {
        const request = await fetch(`${server}/products`);
        const allProducts = await request.json();
        const featuedItem = await allProducts?.products?.filter((item) => item);
        setFeatured(featuedItem);
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/products`);
        const allProducts = await request.json();
        const trendingItem = allProducts?.products?.filter((item) => item);
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async () => {
        const request = await fetch(`${server}/products`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts?.products?.sort(function (a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
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
                        <div className={active === "1" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <FeaturedSlider products={featured} />
                            </div>
                        </div>

                        <div className={active === "2" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <TrendingSlider products={trending} />
                            </div>
                        </div>
                        <div className={active === "3" ? "tab-pane fade show active" : "tab-pane fade"}>
                            <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                                <NewArrivalTabSlider products={newArrival} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
