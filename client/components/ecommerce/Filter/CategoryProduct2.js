import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
import { server } from "../../../config/index";

const CategoryProduct2 = ({ updateProductCategory, type }) => {
  const router = useRouter();
  const [cat1, setCat1] = useState([]);

  // const removeSearchTerm = () => {
  //     router.push({
  //         pathname: "/products",
  //     });
  // };

  const catP1 = async () => {
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const cat1Item = allProducts;
    setCat1(cat1Item);
  };

  useEffect(() => {
    catP1();
  }, []);

  const itemCategory = useMemo(() => {
    const category = cat1?.products?.map((item) => item.category);
    const uniqueCategory = [...new Set(category)];
    return uniqueCategory;
  }, [cat1]);
  const selectCategory = (e, category) => {
    e.preventDefault();
    // removeSearchTerm();
    updateProductCategory(category);
    router.push({
      pathname: type === "mobile" ? "shop-grid-right" : "/products",
      query: {
        cat: category, //
      },
    });
  };

  return (
    <>
      <ul>
        {itemCategory && itemCategory.length > 0
          ? itemCategory.map((item, index) => (
              <li key={index} onClick={(e) => selectCategory(e, item)}>
                <a>
                  {(() => {
                    switch (item) {
                      case "yensach":
                        return "Yến sào";
                      case "dongtrunghathao":
                        return "Đông trùng hạ thảo";
                      case "hatdinhduong":
                        return "Hạt dinh dưỡng";
                      case "mang":
                        return "Măng";
                      default:
                        return item;
                    }
                  })()}
                </a>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default connect(null, { updateProductCategory })(CategoryProduct2);
