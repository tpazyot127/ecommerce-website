import React from "react";
import Link from "next/link"
import BestSellerSlider from "../sliders/BestSeller";
import TrendingSlider2 from "../sliders/Trending2";
import NewArrival2 from "../sliders/NewArrival2";
import TopRatedSlider from "../sliders/TopRated";
const Bottom = () => {
    return (
        <>
            <section className="section-padding mb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay="0">
                            <h4 className="section-title style-1 mb-30  animated animated">Bán chạy nhất</h4>
                            <div className="product-list-small  animated animated">
                                <BestSellerSlider/>                                
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp" data-wow-delay=".1s">
                            <h4 className="section-title style-1 mb-30  animated animated">Sản phẩm trending</h4>
                            <div className="product-list-small  animated animated">
                                <TrendingSlider2 />                               
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                            <h4 className="section-title style-1 mb-30  animated animated">Sản phẩm mới</h4>
                            <div className="product-list-small  animated animated">
                                <NewArrival2/>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp" data-wow-delay=".3s">
                            <h4 className="section-title style-1 mb-30  animated animated">Đánh giá cao nhất</h4>
                            <div className="product-list-small  animated animated">
                                <TopRatedSlider/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Bottom;
