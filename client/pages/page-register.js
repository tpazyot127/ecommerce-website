import Link from "next/link";
import Layout from "../components/layout/Layout";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { server } from "../config";

function Register() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    async function register(e) {
        e.preventDefault();
        setIsLoading(true);
        const {
            name,
            email,
            password,
            confirmPassword,
            phoneNumber,
            rememberMe,
        } = formData;

        if (password != confirmPassword) {
            toast.error("Mật khẩu không khớp!");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(`${server}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            const result = await response.json();

            if (response?.ok) {
                toast.success("Đăng ký thành công");
                router.push("/page-login");
            } else {
                const message = Array.isArray(result.message) ? result.message[0] : result.message;
                toast.error(message || "Đăng ký không thành công");
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
                                                    <p className="mb-30">
                                                        Bạn đã có tài khoản rồi{" "}
                                                        <Link href="/page-login">
                                                            <a>Đăng nhập</a>
                                                        </Link>
                                                    </p>
                                                </div>
                                                <form onSubmit={register}>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="name"
                                                            placeholder="Tên của bạn"
                                                            value={
                                                                formData.name
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>

                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            required=""
                                                            name="email"
                                                            placeholder="Tên tài khoản hoặc email"
                                                            value={
                                                                formData.email
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="password"
                                                            placeholder="Mật khẩu"
                                                            value={
                                                                formData.password
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            required=""
                                                            type="password"
                                                            name="confirmPassword"
                                                            placeholder="Nhập lại mật khẩu"
                                                            value={
                                                                formData.confirmPassword
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="number"
                                                            required=""
                                                            name="phoneNumber"
                                                            placeholder="Số điện thoại"
                                                            value={
                                                                formData.phoneNumber
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="login_footer form-group mb-50">
                                                        <div className="chek-form">
                                                            <div className="custome-checkbox">
                                                                <input
                                                                    className="form-check-input"
                                                                    type="checkbox"
                                                                    name="rememberMe"
                                                                    id="exampleCheckbox1"
                                                                    value={
                                                                        formData.rememberMe
                                                                    }
                                                                    onChange={
                                                                        handleChange
                                                                    }
                                                                />
                                                                <label
                                                                    className="form-check-label"
                                                                    htmlFor="exampleCheckbox1"
                                                                >
                                                                    <span>
                                                                        Ghi nhớ
                                                                        tôi
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-heading btn-block hover-up"
                                                            name="login"
                                                            disabled={isLoading}
                                                        >
                                                            {isLoading
                                                                ? "Đang đăng ký ..."
                                                                : "Đăng ký"}
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

export default Register;
