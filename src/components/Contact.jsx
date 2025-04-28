import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className=" min-h-max w-screen  ">
      <div className="relative  bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          {/* <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          /> */}
          {/* <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          /> */}
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="let&#39;s Te<b>a</b>cher <b>a</b>ssi<b>s</b>t D<b>o</b> the Re<b>a</b>din<b>g</b> for <b>y</b>ou.<b>!</B>"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
            startValue="100"
          />

          <Button
            title="Try it for free"
            containerClass="mt-10 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
