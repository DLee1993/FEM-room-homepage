import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselButtons from "./CarouselButtons";
import "swiper/css";
import "swiper/css/navigation";
import slide1Desktop from "../../images/desktop-image-hero-1.jpg";
import slide1Mobile from "../../images/mobile-image-hero-1.jpg";
import slide2Desktop from "../../images/desktop-image-hero-2.jpg";
import slide2Mobile from "../../images/mobile-image-hero-2.jpg";
import slide3Desktop from "../../images/desktop-image-hero-3.jpg";
import slide3Mobile from "../../images/mobile-image-hero-3.jpg";
import showNowArrow from "../../images/icon-arrow.svg";

const Carousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation]}
                loop={true}
                slidesPerView={1}
                className="w-full md:h-2/3"
            >
                <SwiperSlide className="md:flex">
                    <section className="md:w-1/2">
                        <img
                            src={slide1Desktop}
                            alt="white and wood table dining table set"
                            className="h-full hidden min-[490px]:block"
                        />
                        <img
                            src={slide1Mobile}
                            alt="white and wood table dining table set"
                            className="w-full h-full min-[490px]:hidden"
                        />
                    </section>
                    <section className="md:w-1/2 flex justify-center items-start flex-col px-2 md:px-5 py-10 md:py-0">
                        <h1 className="text-3xl xl:text-4xl max-w-[400px] font-bold">
                            Discover innovative ways to decorate
                        </h1>
                        <p className="my-6 md:my-14 text-gray md:max-w-[600px]">
                            We provide unmatched quality, comfort, and style for property owners
                            across the country. Our experts combine form and function in bringing
                            your vision to life. Create a room in your own style with our collection
                            and make your property a reflection of you and what you love.
                        </p>
                        <button className="flex justify-center items-center tracking-[7px] font-bold uppercase hover:opacity-50">
                            shop now
                            <span className="ml-4">
                                <img src={showNowArrow} alt="arrow icon" />
                            </span>
                        </button>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="md:flex">
                    <section className="md:w-1/2">
                        <img
                            src={slide2Desktop}
                            alt="white and wood table dining table set"
                            className="h-full hidden min-[490px]:block"
                        />
                        <img
                            src={slide2Mobile}
                            alt="white and wood table dining table set"
                            className="w-full h-full min-[490px]:hidden"
                        />
                    </section>
                    <section className="md:w-1/2 flex justify-center items-start flex-col px-2 md:px-5 py-10 md:py-0">
                        <h1 className="text-3xl xl:text-4xl max-w-[400px] font-bold">
                            We are available all across the globe
                        </h1>
                        <p className="my-6 md:my-14 text-gray md:max-w-[600px]">
                            With stores all over the world, it`s easy for you to find furniture for
                            your home or place of business. Locally, we`re in most major cities
                            throughout the country. Find the branch nearest you using our store
                            locator. Any questions? Don`t hesitate to contact us today.
                        </p>
                        <button className="flex justify-center items-center tracking-[7px] font-bold uppercase hover:opacity-50">
                            shop now
                            <span className="ml-4">
                                <img src={showNowArrow} alt="arrow icon" />
                            </span>
                        </button>
                    </section>
                </SwiperSlide>
                <SwiperSlide className="md:flex">
                    <section className="md:w-1/2">
                        <img
                            src={slide3Desktop}
                            alt="white and wood table dining table set"
                            className="h-full hidden min-[490px]:block"
                        />
                        <img
                            src={slide3Mobile}
                            alt="white and wood table dining table set"
                            className="w-full h-full min-[490px]:hidden"
                        />
                    </section>
                    <section className="md:w-1/2 flex justify-center items-start flex-col px-2 md:px-5 py-10 md:py-0">
                        <h1 className="text-3xl xl:text-4xl max-w-[400px] font-bold">
                            Manufactured with the best materials
                        </h1>
                        <p className="my-6 md:my-14 text-gray md:max-w-[600px]">
                            Our modern furniture store provide a high level of quality. Our company
                            has invested in advanced technology to ensure that every product is made
                            as perfect and as consistent as possible. With three decades of
                            experience in this industry, we understand what customers want for their
                            home and office.
                        </p>
                        <button className="flex justify-center items-center tracking-[7px] font-bold uppercase hover:opacity-50">
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
