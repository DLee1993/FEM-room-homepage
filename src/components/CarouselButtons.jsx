import { useSwiper } from "swiper/react";
import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";
const CarouselButtons = () => {
    const swiper = useSwiper();
    return (
        <section className="absolute top-[42.5%] sm:top-[56%] lg:top-auto lg:bottom-0 right-0 lg:left-[60%] z-50 bg-black w-[90px] min-[1070px]:w-[100px] min-[1150px]:w-[110px] min-[1200px]:w-[116px] h-[50px] flex justify-evenly items-center">
            <button
                onClick={() => swiper.slidePrev()}
                className="w-full h-full flex justify-center items-center"
            >
                <img src={arrowLeft} alt="" className="w-50 h-50" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="w-full h-full flex justify-evenly items-center"
            >
                <img src={arrowRight} alt="" className="w-50 h-50" />
            </button>
        </section>
    );
};

export default CarouselButtons;
