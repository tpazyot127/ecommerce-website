import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main">
                <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20">
                                            Giao tận tay  <br />
                                            tới nhà của bạn
                                        </h2>
                                        <p className="mb-45">
                                            Bắt đầu mua hàng với{" "}
                                            <span className="text-brand">
                                                OCOP
                                            </span>
                                        </p>
                                        <form className="form-subcriber d-flex">
                                            <input
                                                type="email"
                                                placeholder="Địa chỉ email của bạn"
                                            />
                                            <button className="btn" type="submit">
                                                Đăng ký  
                                            </button>
                                        </form>
                                    </div>
                                    <img
                                        src="/assets/imgs/banner/banner-9.png"
                                        alt="newsletter"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Giá cả ưu đãi
                                        </h3>
                                        <p>Giảm giá hàng ngày</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-2.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Giao hàng miễn phí
                                        </h3>
                                        <p>Dịch vụ 24/7</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Ưu đãi hàng ngày
                                        </h3>
                                        <p>Khi bạn đăng ký</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-4.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Kết nối nông sản
                                        </h3>
                                        <p>Sản phẩm từ 63 tỉnh thành</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Chính sách hoàn trả
                                        </h3>
                                        <p>Hoàn trả và đổi trả</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Giao hàng nhanh 
                                        </h3>
                                        <p>Trong vòng 3 ngày</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/"><a className="mb-15">
                                            <img
                                                src="/assets/imgs/theme/logo.svg"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt=""
                                            />
                                            <strong>Địa chỉ: </strong>{" "}
                                            <span>
                                            Số 14, phố Đại Linh, phường Trung Văn, quận Nam Từ Liêm, Thành phố Hà Nội
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>Liên hệ</strong>
                                            <span> 0947630606</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>Email:</strong>
                                            <span>htx.nsv@gmail.com</span>
                                            <br/>
                                            <span>htx.nongsanvietnam@gmail.com</span>

                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-clock.svg"
                                                alt=""
                                            />
                                            <strong>Hoạt động:</strong>
                                            <span>
                                                10:00 - 18:00, Cả tuần
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">Hợp tác xã </h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Về chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="#">Thông tin vận chuyển</a>
                                    </li>
                                    <li>
                                        <a href="#">Chính sách bảo mật</a>
                                    </li>
                                    <li>
                                        <a href="#">Điều khoản &amp; Điều kiện</a>
                                    </li>
                                    <li>
                                        <a href="#">Liên hệ chúng tôi</a>
                                    </li>
                                    <li>
                                        <a href="#">Zalo</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">Tài khoản</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Đăng nhập</a>
                                    </li>
                                    <li>
                                        <a href="#">Xem giỏ hàng</a>
                                    </li>
                                    <li>
                                        <a href="#">Mục ưa thích</a>
                                    </li>
                                    <li>
                                        <a href="#">Theo dõi đơn hàng</a>
                                    </li>
                                    <li>
                                        <a href="#">Hỗ trợ</a>
                                    </li>
                                    <li>
                                        <a href="#">Thông tin vận chuyển</a>
                                    </li>
                                    <li>
                                        <a href="#">So sánh sản phẩm</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">Hợp tác</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Trở thành nhà phân phối</a>
                                    </li>
                                    <li>
                                        <a href="#">Liên kết với OCOP</a>
                                    </li>
                                    <li>
                                        <a href="#">Nghiệp vụ nông sản</a>
                                    </li>
                                    <li>
                                        <a href="#">Hỗ trợ nông sản</a>
                                    </li>
                                    <li>
                                        <a href="#">Nhà cung cấp</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">Phổ biến</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Yến sạch </a>
                                    </li>
                                    <li>
                                        <a href="#">Đông trùng hạ thảo</a>
                                    </li>
                                    <li>
                                        <a href="#">Hạt dinh dưỡng sấy khô</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h4 className="widget-title ">Thanh toán</h4>
                                <p className="mb-20 ">Secured Payment Gateways</p>
                                <img
                                    className=""
                                    src="/assets/imgs/theme/payment-method.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                                &copy; 2023,{" "}
                                <strong className="text-brand">OCOP</strong> - HỢP TÁC XÃ NÔNG SẢN VIỆT <br />
                                All rights reserved
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    0947630606<span>Từ 8:00 - 22:00</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Theo dõi chúng tôi</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Giảm giá 15% cho lần đăng ký đầu tiên
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
