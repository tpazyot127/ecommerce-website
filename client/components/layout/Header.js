import Link from "next/link";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryProduct2 from "../ecommerce/Filter/CategoryProduct2";
import CategoryProduct3 from "../ecommerce/Filter/CategoryProduct3";
import Search from "../ecommerce/Search";

const Header = ({
  totalCartItems,
  totalCompareItems,
  toggleClick,
  totalWishlistItems,
}) => {
  const [isToggled, setToggled] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY >= 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <header className="header-area header-style-1 header-height-2">
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap" style={{height:"6rem"}}>
              <div className="logo logo-width-1">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" style={{height:"5rem"}}/>
                    <h5>HTX Nông sản Việt</h5>
                    <h5>Tâm hồn Việt!</h5>
                  </a>
                </Link>
              </div>
              <div className="header-right">
                <div className="search-style-2">
                  <Search />
                </div>
                <div className="header-action-right">
                  <div className="header-action-2">
                    <div className="header-action-icon-2">
                      <Link href="/shop-compare">
                        <a>
                          <img
                            className="svgInject"
                            alt="Evara"
                            src="/assets/imgs/theme/icons/icon-compare.svg"
                          />
                          <span className="pro-count blue">
                            {totalCompareItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-compare">
                        <a>
                          <span className="lable ml-0">So sánh</span>
                        </a>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-wishlist">
                        <a>
                          <img
                            className="svgInject"
                            alt="Evara"
                            src="/assets/imgs/theme/icons/icon-heart.svg"
                          />
                          <span className="pro-count blue">
                            {totalWishlistItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-wishlist">
                        <span className="lable">Yêu thích</span>
                      </Link>
                    </div>
                    <div className="header-action-icon-2">
                      <Link href="/shop-cart">
                        <a className="mini-cart-icon">
                          <img
                            alt="Evara"
                            src="/assets/imgs/theme/icons/icon-cart.svg"
                          />
                          <span className="pro-count blue">
                            {totalCartItems}
                          </span>
                        </a>
                      </Link>
                      <Link href="/shop-cart">
                        <a>
                          <span className="lable">Giỏ hàng</span>
                        </a>
                      </Link>
                    </div>

                    <div className="header-action-icon-2">
                      <Link href="/page-account">
                        <a>
                          <img
                            className="svgInject"
                            alt="Nest"
                            src="/assets/imgs/theme/icons/icon-user.svg"
                          />
                        </a>
                      </Link>
                      <Link href="/page-account">
                        <a>
                          <span className="lable ml-0">Tài khoản</span>
                        </a>
                      </Link>
                      <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                        <ul>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-user mr-10"></i>
                                Tài khoản của tôi
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-location-alt mr-10"></i>
                                Theo dõi đơn hàng
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-label mr-10"></i>
                                Voucher của tôi
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-wishlist">
                              <a>
                                <i className="fi fi-rs-heart mr-10"></i>
                                Các sản phẩm yêu thích
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-account">
                              <a>
                                <i className="fi fi-rs-settings-sliders mr-10"></i>
                                Cài đặt
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/page-login">
                              <a>
                                <i className="fi fi-rs-sign-out mr-10"></i>
                                Đăng xuất
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            scroll
              ? "header-bottom header-bottom-bg-color sticky-bar stick"
              : "header-bottom header-bottom-bg-color sticky-bar"
          }
        >
          <div className="container">
            <div className="header-wrap header-space-between position-relative">
              <div className="logo logo-width-1 d-block d-lg-none">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" style={{height:"4rem"}}/>
                    <h6
                      style={{
                        position: "absolute",
                        left:"10px"
                      }}
                    >
                      HTX Nông Sản Việt
                    </h6>
                  </a>
                </Link>
                
              </div>
              <div className="header-nav d-none d-lg-flex">
                <div className="main-categori-wrap d-none d-lg-block">
                  <a
                    className="categories-button-active"
                    onClick={handleToggle}
                  >
                    <span className="fi-rs-apps"></span>
                    <span className="et">Danh mục</span> sản phẩm
                    <i className="fi-rs-angle-down"></i>
                  </a>

                  <div
                    className={
                      isToggled
                        ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open"
                        : "categories-dropdown-wrap categories-dropdown-active-large font-heading"
                    }
                  >
                    <div className="d-flex categori-dropdown-inner">
                      <CategoryProduct2 />
                    </div>
                    <div
                      className="more_slide_open"
                      style={{ display: "none" }}
                    >
                      <div className="d-flex categori-dropdown-inner">
                        <ul>
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-1.svg"
                                  alt=""
                                />
                                Milks and Dairies
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-2.svg"
                                  alt=""
                                />
                                Clothing & beauty
                              </a>
                            </Link>
                          </li>
                        </ul>
                        <ul className="end">
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-3.svg"
                                  alt=""
                                />
                                Wines & Drinks
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/products">
                              <a>
                                {" "}
                                <img
                                  src="/assets/imgs/theme/icons/icon-4.svg"
                                  alt=""
                                />
                                Fresh Seafood
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="more_categories">
                      <span className="icon"></span>{" "}
                      <span className="heading-sm-1">Xem thêm</span>
                    </div>
                  </div>
                </div>
                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block  font-heading">
                  <nav>
                    <ul>
                      <li className="hot-deals">
                        <img
                          src="/assets/imgs/theme/icons/icon-hot.svg"
                          alt="hot deals"
                        />
                        <Link href="/products">
                          <a>Hot Deals</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/">
                          <a className="active">Trang chủ</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/page-about">
                          <a>Về chúng tôi</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products">
                          <a>Sản phẩm</a>
                        </Link>
                      </li>

                      <li>
                        <Link href="/page-contact">
                          <a>Liên hệ</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="hotline d-none d-lg-flex">
                <img
                  src="/assets/imgs/theme/icons/icon-headphone.svg"
                  alt="hotline"
                />

                <p>
                  <a href="http://Zalo.me/0947630606">Liên hệ zalo</a>
                  <span>0947630606</span>
                </p>
              </div>
              <div className="header-action-icon-2 d-block d-lg-none">
                <div
                  className="burger-icon burger-icon-white"
                  onClick={toggleClick}
                >
                  <span className="burger-icon-top"></span>
                  <span className="burger-icon-mid"></span>
                  <span className="burger-icon-bottom"></span>
                </div>
              </div>
              <div className="header-action-right d-block d-lg-none">
                <div className="header-action-2">
                  <div className="header-action-icon-2">
                    <Link href="/shop-wishlist">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-heart.svg"
                        />
                        <span className="pro-count white">
                          {totalWishlistItems}
                        </span>
                      </a>
                    </Link>
                  </div>
                  <div className="header-action-icon-2">
                    <Link href="/shop-cart" className="mini-cart-icon">
                      <a>
                        <img
                          alt="Evara"
                          src="/assets/imgs/theme/icons/icon-cart.svg"
                        />
                        <span className="pro-count white">
                          {totalCartItems}
                        </span>
                      </a>
                    </Link>
                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                      <ul>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <img
                                alt="Evara"
                                src="/assets/imgs/shop/thumbnail-3.jpg"
                              />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                Plain Striola Shirts
                              </Link>
                            </h4>
                            <h3>
                              <span>1 ×</span>
                              $800.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <i className="fi-rs-cross-small"></i>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="shopping-cart-img">
                            <Link href="/shop-grid-right">
                              <img
                                alt="Evara"
                                src="/assets/imgs/shop/thumbnail-4.jpg"
                              />
                            </Link>
                          </div>
                          <div className="shopping-cart-title">
                            <h4>
                              <Link href="/shop-grid-right">
                                Macbook Pro 2024
                              </Link>
                            </h4>
                            <h3>
                              <span>1 ×</span>
                              $3500.00
                            </h3>
                          </div>
                          <div className="shopping-cart-delete">
                            <Link href="/#">
                              <i className="fi-rs-cross-small"></i>
                            </Link>
                          </div>
                        </li>
                      </ul>
                      <div className="shopping-cart-footer">
                        <div className="shopping-cart-total">
                          <h4>
                            Tổng cộng
                            <span>$383.00</span>
                          </h4>
                        </div>
                        <div className="shopping-cart-button">
                          <Link href="/shop-cart">Giỏ hàng</Link>
                          <Link href="/shop-checkout">Thanh toán</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  totalCartItems: state.cart.length,
  totalCompareItems: state.compare.items.length,
  totalWishlistItems: state.wishlist.items.length,
});

export default connect(mapStateToProps, null)(Header);
