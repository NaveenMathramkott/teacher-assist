import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=500 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    // Initial state: full height image
    clipAnimation.from(".mask-clip-path", { height: "100vh", width: "100%" });

    // Animate to letterbox effect (trim top and bottom)
    clipAnimation.to(".mask-clip-path", {
      height: "70vh", // Adjust this value to control how much is trimmed
      width: "100%",
      paddingTop: 300,
      opacity: 0.4,
      zIndex: -1000,
      boarderRadius: 0,

      // ease: "power2.inOut",
    });

    // Optional: Add a slight scale effect for more cinematic feel
    clipAnimation.to(
      ".mask-clip-path img",
      { scale: 1.05, ease: "power2.inOut" },
      "<"
    );
    clipAnimation.to(
      "#about",
      { backgroundColor: "rgba(243, 250, 1,.3)", ease: "power2.inOut" },
      "<"
    );
  });

  return (
    <div id="about" className=" min-h-screen w-screen">
      <div
        className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
        id="clip"
      >
        <div className="mask-clip-path  absolute inset-0 flex size-full items-center justify-center overflow-hidden">
          <img
            src="img/about-sec.png"
            alt="Background"
            className="size-full rounded-none object-cover"
          />
        </div>
        <AnimatedTitle
          title="Rev<b>o</B>luti<b>o</b>nize D<b>o</b>cuments with <br/> Next-Ge<b>n</b> Docum<b>e</b>nt In<b>t</b>elli<b>g</b>ence"
          // title="Disc<b>o</b>ver the most efficient <br /> AI for document <b>M</b>anagement"
          containerClass="mt-50 !text-black text-center"
          startValue="800"
        />
      </div>
    </div>
  );
};

export default About;
