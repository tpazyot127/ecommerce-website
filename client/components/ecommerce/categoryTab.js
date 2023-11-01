import React, { useEffect, useState, useMemo } from "react";
import { server } from "../../config/index";
import Cat1Tab from "../elements/FeaturedTab";
import Cat1TabSkeleton from "../elements/Cat1TabSkeleton"; // import the skeleton component

function CategoryTab() {
  const [active, setActive] = useState("1");
  const [catAll, setCatAll] = useState([]);
  console.log(2424242, catAll);

  const [isLoading, setIsLoading] = useState(false); // add a loading state

  const catPAll = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const catAllItem = allProducts?.products?.filter((item) => item.category);
    setCatAll(catAllItem.reverse());
    setActive("1");
    setIsLoading(false); // set the loading state to false
  };

  const catP1 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    setCatAll(allProducts?.products);
    setActive("2");
    setIsLoading(false); // set the loading state to false
  };

  const catP2 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    setCatAll(allProducts?.products);
    setActive("3");
    setIsLoading(false); // set the loading state to false
  };

  const catP3 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    setCatAll(allProducts?.products);
    setActive("4");
    setIsLoading(false); // set the loading state to false
  };

  const catP4 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    setCatAll(allProducts?.products);
    setActive("5");
    setIsLoading(false); // set the loading state to false
  };
  useEffect(() => {
    catPAll();
  }, []);

  const filteredProducts = useMemo(() => {
    switch (active) {
      case "1":
        return catAll.reverse();
      case "2":
        return catAll.filter((item) => item.category === "yensach");
      case "3":
        return catAll.filter((item) => item.category === "dongtrunghathao");
      case "4":
        return catAll.filter((item) => item.category === "hatdinhduong");
      case "5":
        return catAll.filter((item) => item.category === "mang");
      default:
        return catAll;
    }
  }, [active, catAll]);

  return (
    <>
      <div className="section-title style-2 wow animate__animated animate__fadeIn">
        <h3>Sản phẩm phổ biến</h3>
        <ul className="nav nav-tabs links" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={active === "1" ? "nav-link active" : "nav-link"}
              onClick={catPAll}
            >
              Tất cả
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "5" ? "nav-link active" : "nav-link"}
              onClick={catP4}
            >
              Măng
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "2" ? "nav-link active" : "nav-link"}
              onClick={catP1}
            >
              Yến sạch
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "3" ? "nav-link active" : "nav-link"}
              onClick={catP2}
            >
              Đông trùng hạ thảo
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={active === "4" ? "nav-link active" : "nav-link"}
              onClick={catP3}
            >
              Hạt dinh dưỡng sấy khô
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content wow fadeIn animated">
        <div
          className={
            active === "1" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && catAll ? (
              <div className="skeleton">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <div style={{ paddingRight: "35px" }}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={filteredProducts} />
            )}
          </div>
        </div>

        <div
          className={
            active === "2" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && catAll ? (
              <div className="skeleton">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <div style={{ paddingRight: "35px" }}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={filteredProducts} />
            )}
          </div>
        </div>

        <div
          className={
            active === "3" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && catAll ? (
              <div className="skeleton">
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <div style={{ paddingRight: "35px" }}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={filteredProducts} />
            )}
          </div>
        </div>

        <div
          className={
            active === "4" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && catAll ? (
              <div className="skeleton">
                {Array(10)
                  .fill()
                  .map((_, index) => (
                    <div style={{ paddingRight: "35px" }}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={filteredProducts} />
            )}
          </div>
        </div>
        <div
          className={
            active === "5" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && catAll ? (
              <div className="skeleton">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <div style={{ paddingRight: "35px" }}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={filteredProducts} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryTab;
