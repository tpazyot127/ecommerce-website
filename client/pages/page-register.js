import Link from "next/link";
import Layout from "../components/layout/Layout";


function Login() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register">
            <div className="page-content pt-150 pb-150">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                            <div className="row">
                                <div className="col-lg-6 pr-30 d-none d-lg-block">
                                    <img className="border-radius-15" src="assets/imgs/page/login-1.png" alt="" />
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="login_wrap widget-taber-content background-white">
                                        <div className="padding_eight_all bg-white">
                                            <div className="heading_s1">
                                                <p className="mb-30">Bạn đã có tài khoản rồi <Link href="/page-login"><a>Đăng nhập</a></Link></p>
                                            </div>
                                            <form method="post">
                                                <div className="form-group">
                                                    <input type="text" required="" name="name" placeholder="Tên của bạn" />
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" required="" name="email" placeholder="Tên tài khoản hoặc email" />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="password" placeholder="Mật khẩu" />
                                                </div>
                                                <div className="form-group">
                                                    <input required="" type="password" name="re-password" placeholder="Nhập lại mật khẩu" />
                                                </div>
                                                <div className="form-group">
                                                    <input type="number" required="" name="phone-number" placeholder="Số điện thoại" />
                                                </div>
                                                <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Ghi nhớ tôi</span></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-heading btn-block hover-up" name="login">Đăng ký</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
}

export default Login;
