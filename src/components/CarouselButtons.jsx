import { useSwiper } from "swiper/react";
const CarouselButtons = () => {
    const swiper = useSwiper();
    return (
        <section className="absolute bottom-0 right-1/3 z-50">
            <button className="bg-black-600" onClick={() => swiper.slidePrev()}>
                Prev
            </button>
            <button className="ml-10" onClick={() => swiper.slideNext()}>
                Next
            </button>
        </section>
    );
};

export default CarouselButtons;
