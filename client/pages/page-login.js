import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../components/layout/Layout";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function login(e) {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await signIn("credentials", {
                redirect: false,
                email,
                password,
            });

            if (response?.ok) {
                toast.success("Đăng nhập thành công");
                router.push("/");
            } else {
                toast.error(
                    response.message[0] || "Email hoặc mật khẩu không đúng"
                );
            }
        } catch (error) {
            toast.error("Lỗi không xác định");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="Login & Register">
                <div className="page-content pt-150 pb-150">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                                <div className="row">
                                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                                        <img
                                            className="border-radius-15"
                                            src="assets/imgs/page/login-1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-8">
                                        <div className="login_wrap widget-taber-content background-white">
                                            <div className="padding_eight_all bg-white">
                                                <div className="heading_s1">
                                                    <h1 className="mb-5">
                                                        Đăng nhập
                                                    </h1>

                                                    <p className="mb-30">
                                                        Bạn chưa có tài khoản?{" "}
                                                        <Link href="/page-register">
                                                            <a>
                                                                Đăng ký tài
                                                                khoản
                                                            </a>
                                                        </Link>
                                                    </p>
                                                </div>
                                                <form onSubmit={login}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            placeholder="Tên tài khoản hoặc email *"
                                                            value={email}
                                                            onChange={(e) =>
                                                                setEmail(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Mật khẩu *"
                                                            value={password}
                                                            onChange={(e) =>
                                                                setPassword(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="login_footer form-group">
                                                        <div className="chek-form">
                                                            <input
                                                                type="text"
                                                                required=""
                                                                name="email"
                                                                placeholder="Nhập mã"
                                                            />
                                                        </div>
                                                        <span className="security-code">
                                                            <b className="text-new">
                                                                8
                                                            </b>
                                                            <b className="text-hot">
                                                                6
                                                            </b>
                                                            <b className="text-sale">
                                                                7
                                                            </b>
                                                            <b className="text-best">
                                                                5
                                                            </b>
                                                        </span>
                                                    </div>
                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="checkbox"
                                                                    id="exampleCheckbox1"
                                                                    value=""
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="exampleCheckbox1"
                                                                >
                                                                    <span>
                                                                        Ghi nhớ
                                                                        đăng
                                                                        nhập
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <a
                                                            className="text-muted"
                                                            href="#"
                                                        >
                                                            Quên mật khẩu
                                                        </a>
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-heading btn-block hover-up"
                                                            name="login"
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading
                                                                ? "Đang đăng nhập ..."
                                                                : "Đăng nhập"}
                                                        </button>
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
