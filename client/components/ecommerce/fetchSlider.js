import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchByCatagory } from "../../redux/action/product";
import BestSeller from "../sliders/BestSeller";
import Discount from "../sliders/Discount";
import Featured from "../sliders/Featured";
import NewArrival from "../sliders/NewArrivalTab";
import Related from "../sliders/Related";
import Trending from "../sliders/Trending";

const FetchSlider = ({ productFilters }) => {
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    const [newArrival, setNewArrival] = useState([]);
    const [discount, setDiscount] = useState([]);
    const [related, setRelated] = useState([]);

    console.log(trending);

    useEffect(() => {
        fetchProducts();
    }, [productFilters.category]);

    const fetchProducts = async () => {

        // With Category
        const allProducts = await fetchByCatagory(`${server}/products`, {
            category: productFilters.category,
        });

        // Without Category
        // const request = await fetch(`${server}/static/product.json`);
        // const allProducts = await request.json();

        // Featured Product
        const featuredProducts = allProducts?.products?.filter((item) => item.featured);

        // Trending Product
        const trendingProducts = allProducts?.products?.filter((item) => item.trending);

        // Best Seller
        const bestSellerProducts = allProducts?.products?.sort(function (a, b) {
            return a.totalSell > b.totalSell ? -1 : 1;
        });

        // New Arrival
        const newArrivalProducts = allProducts?.products?.sort(function (a, b) {
            return a.created > b.created ? -1 : 1;
        });

        // Discount
        const discountProduct = allProducts?.products?.filter(
            (item) => item.discount.isActive
        );

        setFeatured(featuredProducts);
        setTrending(trendingProducts);
        setBestSeller(bestSellerProducts);
        setNewArrival(newArrivalProducts);
        setDiscount(discountProduct);
        setRelated(allProducts);
    };

    return (
        <>
            <Trending trending={trending} />
            <Featured featured={featured} />
            <BestSeller bestSeller={bestSeller} />
            <NewArrival newArrival={newArrival} />
            <Discount discount={discount} />
            <Related related={related} />
        </>
    );
};

const mapStateToProps = (state) => ({
    productFilters: state.productFilters,
});

export default connect(mapStateToProps)(FetchSlider);
