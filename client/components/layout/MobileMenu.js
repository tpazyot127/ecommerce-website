import Link from "next/link";
import { useState } from "react";
import useClickOutside from "../../util/outsideClick";


const MobileMenu = ({ isToggled, toggleClick }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    let domNode = useClickOutside(() => {
        setIsActive({
            status: false,
        });
    });
    return (
        <>
            <div
                className={
                    isToggled
                        ? "mobile-header-active mobile-header-wrapper-style sidebar-visible"
                        : "mobile-header-active mobile-header-wrapper-style"
                }
            >
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <Link href="/">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/logo.svg"
                                        alt="logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                            <button
                                className="close-style search-close"
                                onClick={toggleClick}
                            >
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-search search-style-3 mobile-header-border">
                            <form action="#">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm"
                                />
                                <button type="submit">
                                    <i className="fi-rs-search"></i>
                                </button>
                            </form>
                        </div>
                        <div className="mobile-menu-wrap mobile-header-border">
                            <div className="main-categori-wrap mobile-header-border">
                                <Link href="#">
                                    <a className="categori-button-active-2">
                                        <span className="fi-rs-apps"></span> Danh mục sản phẩm  
                                    </a>
                                </Link>
                                <div className="categori-dropdown-wrap categori-dropdown-active-small">
                                    <ul>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-dress"></i>
                                                    Women's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-tshirt"></i>
                                                    Men's Clothing
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            {" "}
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-smartphone"></i>{" "}
                                                    Cellphones
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-desktop"></i>
                                                    Computer & Office
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-cpu"></i>
                                                    Consumer Electronics
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-home"></i>
                                                    Home & Garden
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-high-heels"></i>
                                                    Shoes
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-teddy-bear"></i>
                                                    Mother & Kids
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                           <Link href="/shop-grid-right">
                                                <a>
                                                    <i className="evara-font-kite"></i>
                                                    Outdoor fun
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav>
                                <ul className="mobile-menu" ref={domNode}>
                                    <li
                                        className={
                                            isActive.key == 1
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(1)}
                                        >
                                        </span>
                                        <Link href="/">
                                            <a>Trang chủ</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 2
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(2)}
                                        >
                                        </span>
                                       <Link href="/shop-grid-right">
                                            <a>Cửa hàng</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 4
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                            onClick={() => handleToggle(4)}
                                        >
                                        </span>
                                        <Link href="/blog-category-fullwidth">
                                            <a>Bài viết</a>
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isActive.key == 5
                                                ? "menu-item-has-children active"
                                                : "menu-item-has-children"
                                        }
                                    >
                                        <span
                                            className="menu-expand"
                                        >
                                        </span>
                                        <Link href="/page-about">
                                            <a>Về chúng tôi </a>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="mobile-header-info-wrap mobile-header-border">
                            <div className="single-mobile-header-info mt-30">
                                <Link href="/page-contact">
                                    <a> Số 14, phố Đại Linh, phường Trung Văn, quận Nam Từ Liêm, Thành phố Hà Nội </a>
                                </Link>
                            </div>
                            <div className="single-mobile-header-info">
                                <Link href="http://Zalo.me/0947630606">
                                    <a>0947630606</a>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-social-icon">
                            <h5 className="mb-15 text-grey-4">Theo dõi chúng tôi </h5>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                            <Link href="#">
                                <a>
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube.svg"
                                        alt=""
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
