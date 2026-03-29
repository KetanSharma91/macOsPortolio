import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FONT_WEIGHTS: any = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 40 },
};

const renderText = (text: string, className: string, baseHeight: number = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseHeight}` }}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ))
}

const setUpTextHover = (container: any, type: any) => {
    if (!container) return () => { };

    const letters = container.querySelectorAll("span");

    const { max, min, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter: any, weight: any, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (e: any) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        letters.forEach((letter: any) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 10000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };

    const handleMouseLeave = () =>
        letters.forEach((letter: any) => animateLetter(letter, base, 0.3));

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
    }
};

const Welcome = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanup = setUpTextHover(titleRef.current, "title");
        const subTitleCleanup = setUpTextHover(subtitleRef.current, "subtitle");

        return () => {
            subTitleCleanup;
            titleCleanup;
        }
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Ketan! Welcome to my", "text-3xl max-sm:text-2xl font-georama", 100)}
            </p>
            <h1 ref={titleRef} className="mt-7">{renderText("portfolio.", "text-9xl max-sm:text-7xl italic font-georama")}</h1>

            {/* <div className="small-screen">
                <p>This Portfolio is designed for desktop/tablet screens only.</p>
            </div> */}
        </section>
    )
};

export default Welcome