import { connect } from "react-redux";
import Layout from "../components/layout/Layout";

import Link from "next/link";
import {
    clearCart,
    closeCart,
    decreaseQuantity,
    deleteFromCart,
    increaseQuantity,
    openCart
} from "../redux/action/cart";
import { formattedPrice } from "../util/util";

const Cart = ({
    openCart,
    cartItems,
    activeCart,
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    clearCart,
}) => {
    const price = () => {
        let price = 0;
        cartItems.forEach((item) => (price += item.price * item.quantity));

        return formattedPrice(price);
    };

    return (
        <>
            <Layout parent="Home" sub="Shop" subChild="Cart">
                <section className="mt-50 mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mb-40">
                                <h1 className="heading-2 mb-10">Giỏ hàng</h1>
                                <div className="d-flex justify-content-between">
                                    <h6 className="text-body">
                                        Có{" "}
                                        <span className="text-brand">3</span>{" "}
                                        sản phẩm trong giỏ hàng
                                    </h6>
                                    <h6 className="text-body">
                                        <a href="#" className="text-muted">
                                            <i className="fi-rs-trash mr-5"></i>
                                            Xoá giỏ hàng
                                        </a>
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="table-responsive shopping-summery">
                                    {cartItems.length <= 0 && "No Products"}
                                    <table
                                        className={
                                            cartItems.length > 0
                                                ? "table table-wishlist"
                                                : "d-none"
                                        }
                                    >
                                        <thead>
                                            <tr className="main-heading">
                                                <th className="custome-checkbox start pl-30" colSpan="2">
                                                    Sản phẩm
                                                </th>
                                                <th scope="col">Unit Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Subtotal</th>
                                                <th scope="col" className="end">
                                                    Xoá
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item, i) => (
                                                <tr key={i}>
                                                    <td className="image product-thumbnail">
                                                        <img
                                                            src={
                                                                item.images[0]
                                                                    .img
                                                            }
                                                        />
                                                    </td>

                                                    <td className="product-des product-name">
                                                        <h6 className="product-name">
                                                            <Link href="/products">
                                                                <a>
                                                                    {item.title}
                                                                </a>
                                                            </Link>
                                                        </h6>
                                                        <div className="product-rate-cover">
                                                            <div className="product-rate d-inline-block">
                                                                <div
                                                                    className="product-rating"
                                                                    style={{
                                                                        width: "90%",
                                                                    }}
                                                                ></div>
                                                            </div>
                                                            <span className="font-small ml-5 text-muted">
                                                                {" "}
                                                                (4.0)
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="price"
                                                        data-title="Price"
                                                    >
                                                        <h4 className="text-brand">
                                                            {formattedPrice(item.price)}
                                                        </h4>
                                                    </td>
                                                    <td
                                                        className="text-center detail-info"
                                                        data-title="Stock"
                                                    ><div className="detail-extralink mr-15">
                                                        <div className="detail-qty border radius ">
                                                            <a
                                                                onClick={(e) =>
                                                                    decreaseQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="qty-down"
                                                            >
                                                                <i className="fi-rs-angle-small-down"></i>
                                                            </a>
                                                            <span className="qty-val">
                                                                {item.quantity}
                                                            </span>
                                                            <a
                                                                onClick={(e) =>
                                                                    increaseQuantity(
                                                                        item.id
                                                                    )
                                                                }
                                                                className="qty-up"
                                                            >
                                                                <i className="fi-rs-angle-small-up"></i>
                                                            </a>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td
                                                        className="text-right"
                                                        data-title="Cart"
                                                    >
                                                        <h4 className="text-body">
                                                            {formattedPrice(item.quantity *
                                                                item.price)}
                                                        </h4>
                                                    </td>
                                                    <td
                                                        className="action"
                                                        data-title="Remove"
                                                    >
                                                        <a
                                                            onClick={(e) =>
                                                                deleteFromCart(
                                                                    item.id
                                                                )
                                                            }
                                                            className="text-muted"
                                                        >
                                                            <i className="fi-rs-trash"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr>
                                                <td
                                                    colSpan="6"
                                                    className="text-end"
                                                >
                                                    {cartItems.length > 0 && (
                                                        <a
                                                            onClick={clearCart}
                                                            className="text-muted"
                                                        >
                                                            <i className="fi-rs-cross-small"></i>
                                                            Xoá giỏ hàng
                                                        </a>
                                                    )}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="cart-action text-end">
                                    <a className="btn ">
                                        <i className="fi-rs-shopping-bag mr-10"></i>
                                        Tiếp tục mua sắm
                                    </a>
                                </div>
                                <div className="divider center_icon mt-50 mb-50">
                                    <i className="fi-rs-fingerprint"></i>
                                </div>
                                <div className="row mb-50">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="heading_s1 mb-3">
                                            <h4>Giá vận chuyển</h4>
                                        </div>
                                        <p className="mt-15 mb-30">
                                            Flat rate:
                                            <span className="font-xl text-brand fw-900">
                                                5%
                                            </span>
                                        </p>
                                                        
                                        <div className="mb-30 mt-50">
                                            <div className="heading_s1 mb-3">
                                                <h4>Sử dụng mã giảm giá</h4>
                                            </div>
                                            <div className="total-amount">
                                                <div className="left">
                                                    <div className="coupon">
                                                        <form
                                                            action="#"
                                                            target="_blank"
                                                        >
                                                            <div className="form-row row justify-content-center">
                                                                <div className="form-group col-lg-6">
                                                                    <input
                                                                        className="font-medium"
                                                                        name="Coupon"
                                                                        placeholder="Nhập mã giảm giá"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-lg-6">
                                                                    <button className="btn">
                                                                        <i className="fi-rs-label mr-10"></i>
                                                                        Sử dụng
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="border p-md-4 p-30 border-radius cart-totals">
                                            <div className="heading_s1 mb-3">
                                                <h4>Tổng thanh toán</h4>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                Tạm tính
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <span className="font-lg fw-900 text-brand">
                                                                     {price()}
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                Vận chuyển
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <i className="ti-gift mr-5"></i>
                                                                Miễn phí giao hàng
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="cart_total_label">
                                                                Tổng cộng
                                                            </td>
                                                            <td className="cart_total_amount">
                                                                <strong>
                                                                    <span className="font-xl fw-900 text-brand">
                                                                        
                                                                        {price()}
                                                                    </span>
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <a href="#" className="btn ">
                                                <i className="fi-rs-box-alt mr-10"></i>
                                                Thanh toán
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cart,
    activeCart: state.counter,
});

const mapDispatchToProps = {
    closeCart,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    openCart,
    clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
