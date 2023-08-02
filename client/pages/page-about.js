import Layout from "../components/layout/Layout";
function About() {
  return (
    <>
      <Layout parent="Home" sub="Pages" subChild="About">
        <div className="container  pt-50">
          <div className="row">
            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="row align-items-center mb-50">
                <div className="col-lg-6">
                  <img
                    src="/assets/imgs/page/about-1.png"
                    alt=""
                    className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="pl-25">
                    <h2 className="mb-30">HỢP TÁC XÃ NÔNG SẢN VIỆT</h2>
                    <h5 className="mb-20">VIET AGRICULTURE COOPERATIVE</h5>
                    <a
                      href={"https://drive.google.com/file/d/1xCAPesV4gO0fu5g6Kpd6iDIBjRcZfgAi/view?usp=sharing"}
                      rel="noopener noreferrer"
                      target="_blank"
                      style={{ fontSize: "20px"}}
                    >
                      File PDF
                    </a>
                  </div>
                </div>
              </section>
              <section className="text-center mb-50">
                <h2 className="title style-3 mb-40">Chúng tôi cung cấp?</h2>
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                      <h4>Giá cả và ưu đãi hợp lý</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                      <h4>Nông sản sạch 63 tỉnh thành</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                      <h4>Miên phí giao hàng</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                      <h4>Dễ dàng hoàn trả</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-5.svg" alt="" />
                      <h4>100% Hài lòng khách hàng</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-24">
                    <div className="featured-card">
                      <img src="/assets/imgs/theme/icons/icon-6.svg" alt="" />
                      <h4>Ưu đãi tuyệt vời mỗi ngày</h4>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form
                      </p>
                      <a href="#">Read more</a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default About;
