import aboutDark from "../../images/image-about-dark.jpg";
import aboutLight from "../../images/image-about-light.jpg";
const About = () => {
    return (
        <section className="flex justify-center items-center flex-col lg:flex-row md:h-1/3 w-full">
            <aside className="h-full lg:w-1/3" aria-label="left image">
                <img src={aboutDark} alt="coffee table and chair" className="h-full" />
            </aside>
            <article className="lg:w-1/3 px-2 md:px-5 py-10 md:py-0">
                <h1 className="tracking-[3px] font-bold uppercase mb-4">about our furniture</h1>
                <p className="text-gray font-medium">
                    Our multifunctional collection blends design and function to suit your indivdual
                    taste. Make each room unique, or pick a cohesive theme that best express your
                    interests and what inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between. Product specialists
                    are available to help you create your dream space.
                </p>
            </article>
            <aside className="h-full lg:w-1/3 overflow-hidden" aria-label="right image">
                <img src={aboutLight} alt="white chair" className="h-full" />
            </aside>
        </section>
    );
};

export default About;
