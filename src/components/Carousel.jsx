import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/navigation";
import slide1Desktop from "../../images/desktop-image-hero-1.jpg";
import slide2Desktop from "../../images/desktop-image-hero-2.jpg";
import slide3Desktop from "../../images/desktop-image-hero-3.jpg";
import showNowArrow from "../../images/icon-arrow.svg";

const Carousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                className="max-w-[400px] sm:max-w-[600px] lg:max-w-none"
            >
                <SwiperSlide className="flex flex-col lg:flex-row pt-10 lg:pt-0">
                    <section className="lg:w-3/5 mx-auto">
                        <img src={slide1Desktop} alt="white and wood table dining table set" />
                    </section>
                    <section className="relative w-full lg:w-2/5 flex flex-col justify-center items-start py-4 lg:px-10 lg:py-0">
                        <h1 className="text-4xl font-bold max-w-[350px]">
                            Discover innovative ways to decorate
                        </h1>
                        <p className="my-6 text-gray">
                            We provide unmatched quality, comfort, and style for property owners
                            across the country. Our experts combine form and function in bringing
                            your vision to life. Create a room in your own style with our collection
                            and make your property a reflection of you and what you love.
                        </p>
                        <button className="flex justify-between items-center tracking-[10px] uppercase font-bold">
                            shop now
                            <span className="ml-4">
                                <img src={showNowArrow} alt="arrow icon" />
                            </span>
                        </button>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col lg:flex-row pt-10 lg:pt-0">
                    <section className="lg:w-3/5 mx-auto">
                        <img src={slide2Desktop} alt="white and wood table dining table set" />
                    </section>
                    <section className="relative w-full lg:w-2/5 flex flex-col justify-center items-start py-4 lg:px-10 lg:py-0">
                        <h1 className="text-4xl font-bold max-w-[350px]">
                            We are available all across the globe
                        </h1>
                        <p className="my-6 text-gray">
                            With stores all over the world, it`s easy for you to find furniture for
                            your home or place of business. Locally, we`re in most major cities
                            throughout the country. Find the branch nearest you using our store
                            locator. Any questions? Don`t hesitate to contact us today.
                        </p>
                        <button className="flex justify-between items-center tracking-[10px] uppercase font-bold">
                            shop now
                            <span className="ml-4">
                                <img src={showNowArrow} alt="arrow icon" />
                            </span>
                        </button>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col lg:flex-row pt-10 lg:pt-0">
                    <section className="lg:w-3/5 mx-auto">
                        <img src={slide3Desktop} alt="white and wood table dining table set" />
                    </section>
                    <section className="relative w-full lg:w-2/5 flex flex-col justify-center items-start py-4 lg:px-10 lg:py-0">
                        <h1 className="text-4xl font-bold max-w-[350px]">
                            Manufactured with the best materials
                        </h1>
                        <p className="my-6 text-gray">
                            Our modern furniture store provide a high level of quality. Our company
                            has invested in advanced technology to ensure that every product is made
                            as perfect and as consistent as possible. With three decades of
                            experience in this industry, we understand what customers want for their
                            home and office.
                        </p>
                        <button className="flex justify-between items-center tracking-[10px] uppercase font-bold">
                            shop now
                            <span className="ml-4">
                                <img src={showNowArrow} alt="arrow icon" />
                            </span>
                        </button>
                    </section>
                </SwiperSlide>
                <CarouselButtons />
            </Swiper>
        </>
    );
};

export default Carousel;
