import HeroSVG from "../../assets/svgs/hero-image.svg";
import HandCoding from "../../assets/images/Hand coding-amico.png";
import './Hero.scss';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <div className="subtitle">Junior Front End Developer</div>
                <h1>Hello, my name <br />is Ali</h1>
                <p>
                    Front-End Developer skilled in building responsive
                    websites with HTML, CSS, JavaScript, and React.
                    Successfully completed final project and earned
                    certification from ALT Academy, with a focus on
                    practical skills
                </p>
                <div className="buttons">
                    <button
                        className="primary"
                        onClick={() => window.open("https://github.com/AliNadirov", "_blank")}
                    >
                        Github
                    </button>
                    <button
                        className="secondary"
                        onClick={() => window.open("https://www.behance.net/ali-front-end-dev", "_blank")}
                    >
                        Behance
                    </button>
                </div>
            </div>
            <div className="hero-image-wrapper">
                <img src={HandCoding} alt="Hand Coding" className="hero-main-img" />
                <img src={HeroSVG} alt="Hero SVG" className="hero-background-svg" />
            </div>
        </section>
    );
}