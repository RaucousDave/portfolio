import FadeIn from "../FadeIn";
import { BiEnvelope } from "react-icons/bi";
export default function Contact() {
  return (
    <>
      <div className="flex flex-col gap-8 min-h-screen items-center justify-center">
        <FadeIn>
          <h1 className="text-neutral font-bold text-6xl sm:text-7xl md:text-8xl text-center">
            Contact<span className="text-secondary">.</span>
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="text-neutral text-lg font-light opacity-60 text-center">
            Shoot me an email if you want to connect! You can also find me on{" "}
            <span className="opacity-100">
              <a
                className="text-primary font-medium underline "
                href="https://www.linkedin.com/in/davies-enienghan-615718307/"
              >
                Linkedin
              </a>
            </span>{" "}
            or{" "}
            <span>
              <a
                className="text-secondary font-medium underline"
                href="https://x.com/sagefrugal"
              >
                Twitter
              </a>
            </span>{" "}
            if that's more your speed.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="">
            <a
              className="flex gap-2 hover:text-primary items-center text-neutral text-base sm:text-xl transition"
              href="mailto:daviesenienghan906@gmail.com"
            >
              <span>
                {" "}
                <BiEnvelope />
              </span>{" "}
              daviesenienghan906@gmail.com
            </a>
          </div>
        </FadeIn>
      </div>
    </>
  );
}
