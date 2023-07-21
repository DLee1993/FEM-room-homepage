import aboutDark from "../../images/image-about-dark.jpg";
import aboutLight from "../../images/image-about-light.jpg";
const About = () => {
    return (
        <section className="flex justify-between items-center flex-col lg:flex-row w-[400px] lg:w-auto max-w-[95%] md:max-w-none mx-auto">
            <aside>
                <img src={aboutDark} alt="coffee table and chair" />
            </aside>
            <article className="my-10 lg:my-0 lg:w-2/3 lg:max-w-[400px] lg:px-4 min-[1290px]:px-0">
                <h1 className="tracking-[3px] font-bold uppercase mb-4">about our furniture</h1>
                <p className="text-gray">
                    Our multifunctional collection blends design and function to suit your indivdual
                    taste. Make each room unique, or pick a cohesive theme that best express your
                    interests and what inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between. Product specialists
                    are available to help you create your dream space.
                </p>
            </article>
            <aside>
                <img src={aboutLight} alt="white chair" />
            </aside>
        </section>
    );
};

export default About;
