import React, { useState } from "react";

const ProductTab = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleOnClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="product-info">
      <div className="tab-style3">
        <ul className="nav nav-tabs text-uppercase">
          <li className="nav-item">
            <a
              className={activeIndex === 1 ? "nav-link active" : "nav-link"}
              id="Description-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(1)}
            >
              Mô tả
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeIndex === 2 ? "nav-link active" : "nav-link"}
              id="Additional-info-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(2)}
            >
              Thông tin
            </a>
          </li>
          <li className="nav-item">
            <a
              className={activeIndex === 4 ? "nav-link active" : "nav-link"}
              id="Reviews-tab"
              data-bs-toggle="tab"
              onClick={() => handleOnClick(4)}
            >
              Reviews (3)
            </a>
          </li>
        </ul>
        <div className="tab-content shop_info_tab entry-main-content">
          <div
            className={
              activeIndex === 1 ? "tab-pane fade show active" : "tab-pane fade"
            }
            id="Description"
          >
            <div className="">
              <p>{product.desc}</p>
              <ul className="product-more-infor mt-30">
                <li>
                  <span>Mặt hàng</span> {product.slug}
                </li>
                <li>
                  <span>Khối lượng</span> {product.weight} G
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
