import { useState } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Thumbs]);

const ThumbSlider = ({ product }) => {
    console.log('product------------------------------', product.gallery)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className="mySwiper2"
            >
                {product && product.gallery ? product?.gallery?.map((item) => (
                    <SwiperSlide>
                        <img src={item.thumb ? item.thumb : ""} />
                        {/* <Zoom
                            img={item.thumb}
                            zoomScale={5}
                            width={500}
                            height={500}
                            ransitionTime={0.5}
                        /> */}
                    </SwiperSlide>
                )) : null}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                className="mySwiper"
            >
                {product && product.gallery ?  product?.gallery?.map((item) => (
                    <SwiperSlide>
                        <img src={item.thumb ? item.thumb : ""} />
                    </SwiperSlide>
                )) : null}
            </Swiper>
        </div>
    );
};

export default ThumbSlider;
