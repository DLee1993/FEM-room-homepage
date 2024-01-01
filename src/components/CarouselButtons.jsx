import { useSwiper } from "swiper/react";
import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";
const CarouselButtons = () => {
    const swiper = useSwiper();
    return (
        <section className="bg-black w-[150px] h-[70px] flex justify-evenly items-center absolute z-50 bottom-[50.7%] translate-y-1/2 right-0 md:top-auto md:bottom-0 md:left-[50%] md:translate-y-0">
            <h2 className="sr-only">slider buttons</h2>
            <button
                onClick={() => swiper.slidePrev()}
                className="w-full h-full flex justify-center items-center hover:bg-gray/50"
            >
                <span className="sr-only">prev</span>
                <img src={arrowLeft} alt="" className="w-50 h-50" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="w-full h-full flex justify-evenly items-center hover:bg-gray/50"
            >
                <span className="sr-only">next</span>
                <img src={arrowRight} alt="" className="w-50 h-50" />
            </button>
        </section>
    );
};

export default CarouselButtons;
