import React, { useEffect, useState } from "react";
import { server } from "../../config/index";
import Cat1Tab from "../elements/FeaturedTab";
import Cat1TabSkeleton from "../elements/Cat1TabSkeleton"; // import the skeleton component

function CategoryTab() {
  const [active, setActive] = useState("1");
  const [catAll, setCatAll] = useState([]);
  const [cat1, setCat1] = useState([]);
  const [cat2, setCat2] = useState([]);
  const [cat3, setCat3] = useState([]);

  const [isLoading, setIsLoading] = useState(false); // add a loading state

  const catPAll = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const catAllItem = allProducts?.products?.filter((item) => item.category);
    setCatAll(catAllItem);
    setActive("1");
    setIsLoading(false); // set the loading state to false
  };
  const catP1 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const cat1Item = allProducts?.products?.filter(
      (item) => item.category == "yensach"
    );
    setCat1(cat1Item);
    setActive("2");
    setIsLoading(false); // set the loading state to false
  };

  const catP2 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const cat2Item = allProducts?.products?.filter(
      (item) => item.category == "dongtrunghathao"
    );
    setCat2(cat2Item);
    setActive("3");
    setIsLoading(false); // set the loading state to false
  };
  const catP3 = async () => {
    setIsLoading(true); // set the loading state to true
    const request = await fetch(`${server}/products`);
    const allProducts = await request.json();
    const cat3Item = allProducts?.products?.filter(
      (item) => item.category == "hatdinhduong"
    );
    setCat3(cat3Item);
    setActive("4");
    setIsLoading(false); // set the loading state to false
  };

  useEffect(() => {
    catPAll();
  }, []);

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
            {isLoading && catAll? (
              <div className="skeleton">
                  {Array(5).fill().map((_, index) => (
                    <div style={{ paddingRight : '35px'}}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={catAll} />
            )}
          </div>
        </div>

        <div
          className={
            active === "2" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && cat1? (
              <div className="skeleton">
                  {Array(5).fill().map((_, index) => (
                    <div style={{ paddingRight : '35px'}}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={cat1} />
            )}
          </div>
        </div>

        <div
          className={
            active === "3" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && cat2? (
              <div className="skeleton">
                  {Array(5).fill().map((_, index) => (
                    <div style={{ paddingRight : '35px'}}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={cat2} />
            )}
          </div>
        </div>

        <div
          className={
            active === "4" ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <div className="product-grid-4 row">
            {isLoading && cat3 ? (
              <div className="skeleton">
                  {Array(5).fill().map((_, index) => (
                    <div style={{ paddingRight : '35px'}}>
                      <Cat1TabSkeleton key={index} />
                    </div>
                  ))}
              </div>
            ) : (
              <Cat1Tab products={cat3} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryTab;
