import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RotatingImage from "@/components/RotatingImage";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import detail from "../../public/1.PNG";
import card1 from "../../public/4.PNG";
import card2 from "../../public/5.PNG";
import card3 from "../../public/6.PNG";
import a from "../../public/A.png";
import l from "../../public/L.png";
import n from "../../public/N.png";
import p from "../../public/P.png";
import foto1 from "../../public/foto1.png";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-custom-back1 to-custom-back2 pb-48 -mb-24">
        <div className="flex space-x-6 p-24 px-[160px]">
          <div>
            <div className="font-title">
              <p className="text-8xl">Allow</p>
              <p className="text-8xl">yourself</p>
              <div className="flex mb-12">
                <p className="text-8xl">to be</p>
                <RotatingImage />
              </div>
            </div>
            <p className="text-2xl font-oswald py-10">
              MENTORING SESSIONS TO UNLOCK YOUR FULL POTENTIAL
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Learn more
            </button>
          </div>
          <Image
            className="absolute w-[550px] right-8 top-32"
            src={foto1}
            alt="Picture of the author"
          />
        </div>

        <div className="pt-32 font-title">
          <p className="text-[40px] flex items-end justify-center">
            " Don't call it a dream. Call it a{" "}
            <b className="text-8xl -mb-1 pl-4">P-L-A-N.</b>
          </p>
          <p className="text-4xl ml-52 pt-12">Make it a reality"</p>
          <p className="ml-52 font-display pt-16">- WHAT FLOWS YOU</p>
        </div>

        <div className="font-title">
          <div className="block">
            <figure className="relative inline-block w-2/5 mr-auto block">
              <Image
                className="w-full block"
                src={p}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
                <p className="text-center text-4xl text-white mb-5">
                  1. PERSONAL
                </p>
                <p className="text-center text-3xl text-white w-full px-4">
                  To ensure you will achieve your
                  <br />
                  dreams, they first need to truly <br />
                  represent who you are, your
                  <br />
                  values and your own
                  <br />
                  personality
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title">
          <div className="block flex justify-end">
            <figure className="relative inline-block w-2/5 ml-auto block">
              <Image
                className="w-full block"
                src={l}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
                <p className="text-center text-4xl text-white mb-5">
                  2. LOVING
                </p>
                <p className="text-center text-3xl text-white w-full px-4">
                  Second, you need to love what
                  <br />
                  you are fostering, breath it
                  <br />
                  constantly. This way you will also
                  <br />
                  attract others that will love it too
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title">
          <div className="block">
            <figure className="relative inline-block w-2/5 mr-auto block">
              <Image
                className="w-full block"
                src={a}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
                <p className="text-center text-4xl text-white mb-5">
                  3. ACTIONABLE
                </p>
                <p className="text-center text-3xl text-white w-full px-4">
                  A dream will only be accomplished
                  <br />
                  once you master the ability to
                  <br />
                  strategically create value-added
                  <br />
                  tasks along the way
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title">
          <div className="block flex justify-end">
            <figure className="relative inline-block w-2/5 ml-auto block">
              <Image
                className="w-full block"
                src={n}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50">
                <p className="text-center text-4xl text-white mb-5">
                  4. NOURISHING
                </p>
                <p className="text-center text-3xl text-white w-full px-4">
                  Finally, the journey most of the times
                  <br />
                  will not be easy nor short, so you should
                  <br />
                  ensure your dreams nourish your life.
                  <br />
                  Everyday.
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div className="rounded-[96px] bg-custom-cards p-16 relative z-10">
        <p className="text-4xl text-center font-title font-semibold pb-6">
          Chapters
        </p>
        <p className="text-2xl text-center font-manrope pb-2">
          Help yourself with the chapter that fits the most with your current
          life stage.
        </p>
        <p className="text-2xl text-center font-manrope pb-20">
          Good news: you can start your WFY journey with more than one!
        </p>
        <div className="flex space-x-6 p-4">
          <div className="bg-white text-center flex flex-col items-center w-4/12 p-6">
            <Image
              className="size-64"
              src={card1}
              alt="Picture of the author"
            />
            <p className="text-4xl">Job ON Job OFF (JOJO)</p>
            <p>
              Especially when we are in our 20s, finding a career that would
              attend our expectations is daunting. Free yourself from this
              suffocating feeling and land your dream job!
            </p>
          </div>
          <div className="bg-white text-center flex flex-col items-center w-4/12 p-6">
            <Image
              className="size-64"
              src={card2}
              alt="Picture of the author"
            />
            <p className="text-4xl">Lifes ABC</p>
            <p>
              If you are approaching or already reached your 60s, I bet you have
              heard comments such as "getting old sucks", ëlderly is tedious",
              or "the last phase of life is the worst". Let me tell you a
              secret: it does not need to be this way. Let us show you how.
            </p>
          </div>
          <div className="bg-white text-center flex flex-col items-center w-4/12 p-6">
            <Image
              className="size-64"
              src={card3}
              alt="Picture of the author"
            />
            <p className="text-4xl">BRAxit</p>
            <p>
              Everyone knows that Brazilians are extremely creative and
              energetic. What remains to be known is that Creativity itself is
              one of the parameters for measuring giftedness. In other words,
              Brazilians have an incredible potential, but unfortunately it is
              very underutilized. In 2023, research showed that +40% of
              Brazilians were thinking about the possibility of moving to
              another country. The BRAxit module was created to make your dream
              of living abroad come true.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image className="w-[350px] pt-20 pb-16" src={detail} alt="Picture of the author" />
          <p className="text-3xl pb-10">
            Any questions? We are just a message away :)
          </p>
          <button class="bg-blue-200 hover:bg-blue-700 hover:text-white text-custom-buttonText py-[13px] px-[28px] rounded-full">
            Get in touch!
          </button>
        </div>
      </div>

      <div className="relative z-0 bg-custom-testimonials -mt-24 pt-32">
        <h3 className="text-center text-4xl font-title text-custom-textTestimonials pt-20 pb-12 font-semibold">Testimonials</h3>

        <div className="pb-56">
            <Carousel slides={<Testimonials />} />
        </div>

      </div>
      

      <Footer />
    </>
  );
}
