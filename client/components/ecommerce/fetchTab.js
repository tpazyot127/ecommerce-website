import React, { useEffect, useState } from "react";
import { server } from "../../config/index";
import FeaturedTab from './../elements/FeaturedTab';
import NewArrivalTab from './../elements/NewArrivalTab';
import TrendingTab from './../elements/TrendingTab';
import Link from "next/link"

function FeatchTab() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProduct = async () => {
        const request = await fetch(`${server}/products`);
        const allProducts = await request.products;
        const featuedItem = allProducts?.products?.filter((item) => item.featured);
        setFeatured(featuedItem);
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/products`);
        const allProducts = await request.json();
        const trendingItem = allProducts?.products?.filter((item) => item.trending);
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
            <div className="section-title style-2 wow animate__animated animate__fadeIn">
                <h3>Sản phẩm phổ biến</h3>
                <ul className="nav nav-tabs links" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "1" ? "nav-link active" : "nav-link"
                            }
                            onClick={featuredProduct}
                        >
                            Featured
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "2" ? "nav-link active" : "nav-link"
                            }
                            onClick={trendingProduct}
                        >
                            Popular
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                            className={
                                active === "3" ? "nav-link active" : "nav-link"
                            }
                            onClick={newArrivalProduct}
                        >
                            New added
                        </button>
                    </li>
                </ul>
            </div>

            <div className="tab-content wow fadeIn animated">
                <div
                    className={
                        active === "1"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <FeaturedTab products={featured} />
                    </div>
                </div>

                <div
                    className={
                        active === "2"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <TrendingTab products={trending} />
                    </div>
                </div>
                <div
                    className={
                        active === "3"
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                    }
                >
                    <div className="product-grid-4 row">
                        <NewArrivalTab products={newArrival} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTab;
