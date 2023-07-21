import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
            >
                <SwiperSlide className="bg-red-600">Slide 1</SwiperSlide>
                <SwiperSlide className="bg-blue-600">Slide 2</SwiperSlide>
                <SwiperSlide className="bg-green-600">Slide 2</SwiperSlide>
                <CarouselButtons />
            </Swiper>
        </>
    );
};

export default Carousel;
