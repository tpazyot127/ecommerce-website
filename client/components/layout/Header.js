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
        <div className="mobile-promotion">
          <span>
            <strong>giảm giá tới 15%</strong>
          </span>
        </div>
        <div className="header-top header-top-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-4"></div>
              <div className="col-xl-6 col-lg-4">
                <div className="text-center">
                  <div id="news-flash" className="d-inline-block">
                    <ul>
                      <li>
                        Giảm giá tới 50%
                        <Link href="/shop-grid-right">
                          <a> Xem thêm</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
          <div className="container">
            <div className="header-wrap">
              <div className="logo logo-width-1">
                <Link href="/">
                  <a>
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                    <h4>HTX Nông Sản Việt</h4>
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
                    <img src="/assets/imgs/theme/logo.svg" alt="logo" />
                  </a>
                </Link>
                <h4
                  style={{
                    position: "absolute",
                    marginLeft: "-35px",
                    width: "250px",
                  }}
                >
                  HTX Nông Sản Việt
                </h4>
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
                      <CategoryProduct3 />
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
                      <span className="heading-sm-1">Show more...</span>
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
                        <Link href="/blog-category-grid">
                          <a>Bài viết</a>
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
