import aboutDark from "../../images/image-about-dark.jpg";
import aboutLight from "../../images/image-about-light.jpg";
const About = () => {
    return (
        <section className="flex justify-between items-center flex-col lg:flex-row max-w-[400px] sm:max-w-[600px] lg:max-w-none mx-auto py-4 lg:py-0">
            <aside className="w-full lg:w-auto" aria-label="left image">
                <img src={aboutDark} alt="coffee table and chair" className="w-full lg:w-auto" />
            </aside>
            <article className="my-10 lg:my-0 lg:w-3/6 lg:max-w-[500px] lg:px-6 min-[1370px]:px-0">
                <h1 className="tracking-[3px] font-bold uppercase mb-4">about our furniture</h1>
                <p className="text-gray font-medium">
                    Our multifunctional collection blends design and function to suit your indivdual
                    taste. Make each room unique, or pick a cohesive theme that best express your
                    interests and what inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between. Product specialists
                    are available to help you create your dream space.
                </p>
            </article>
            <aside className="w-full lg:w-auto" aria-label="right image">
                <img src={aboutLight} alt="white chair" className="w-full lg:w-auto" />
            </aside>
        </section>
    );
};

export default About;
