import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import quotationLeft from "../../../public/11.PNG";
import quotationRight from "../../../public/12.PNG";
import circle1 from "../../../public/circle1.png";
import circle2 from "../../../public/circle2.png";
import circle3 from "../../../public/circle3.png";
import circle4 from "../../../public/circle4.png";
import pictureAbout from "../../../public/pictureAbout.png";

export default function About() {
  return (
    <main className="">
      <Header />
      <div>
        <div className="bg-custom-back1 uppercase py-16 ">
          <div className="flex justify-evenly font-oswald font-light text-3xl  text-center">
            <div className="flex flex-col items-center w-1/6 -px-24">
              <Image
                className="w-44"
                src={circle1}
                alt="Picture of the author"
              />
              <p className="break-words w-full">
                of mentees achieve their ultimate goal
              </p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle2}
                alt="Picture of the author"
              />
              <p className="break-words w-full">of applied WFY methodology</p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle3}
                alt="Picture of the author"
              />
              <p className="break-words w-full">received M7 MBA offer</p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle4}
                alt="Picture of the author"
              />
              <p className="break-words w-full">of mentoring experience</p>
            </div>
          </div>

          <p className="flex justify-end pr-24 font-oswald font-light text-2xl pt-5">
            ...and counting!
          </p>
        </div>

        <div className="bg-custom-back2 py-16">
          <p className="font-title font-bold text-3xl pl-24 pb-10">
            Stephanie’s life purpose:
          </p>
          <div className="flex justify-center items-center">
            <Image
              className="w-32 relative -mb-20"
              src={quotationLeft}
              alt="Picture of the author"
            />
            <p className="font-automobile text-8xl mx-4">
              To touch people’s lives helping them experience their best selves.
            </p>
            <Image
              className="w-32 relative -mt-20"
              src={quotationRight}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="relative h-[95rem]">
          <div className="relative z-10 bg-custom-back1 rounded-b-[96px] p-40 h-1/2">
            <div className="bg-white px-20 -mb-48 shadow-2xl rounded-lg font-manrope">
              <div className="relative flex pb-12">
                <div className="absolute -top-24 -left-52">
                  <Image
                    className="w-[32rem]"
                    src={pictureAbout}
                    alt="Picture of the author"
                  />
                </div>
                <div className="w-1/2 ml-auto space-y-4">
                  <h2 className="font-automobile text-9xl text-custom-titleAbout">
                    “3, 2, 1... Action!”
                  </h2>
                  <p>
                    The phrase above is heard hundreds of times in film studios.
                    But, I will try to show you why all of us should also have
                    it in the back of our minds. I will start by asking you:
                  </p>
                  <p>
                    In a filmmaking career, which role would you like to play?
                  </p>
                  <p>
                    Some would answer "the protagonist, of course", others would
                    prefer to be the coadjuvants, dubles or even act as part of
                    the scenario. No spoken word, right?
                  </p>
                </div>
              </div>

              <div className="relative space-y-4 ">
                <p>
                  Just a few would answer "the director". Perhaps you have even
                  forgotten about this role, but you should not. Why?
                </p>
                <p>
                  Usually, when we answer silly questions as the one above, we
                  shed light on important characteristics about our mindsets and
                  the way we command our lives.
                </p>
                <p>
                  For those who answered "live scenario" or duble, do not ever
                  forget that you have a strong inner voice that may have been
                  in silence for many years, however that is ready to fill the
                  places with authentic ideas and opinions. You have the right
                  to be heard.
                </p>
                <p>
                  For those who said "protagonist", remember that usually you
                  are the protagonist on some movies and series but not in
                  others. The gap difference of exposure, drive, and involvement
                  in the scripts that are given to you when you are and are not
                  in the protagonist role is dangerous. Sometimes you are in the
                  spotlight, others in the shadows.
                </p>
                <p>
                  Finally, when we think about how we are living our lives, I
                  believe we should aim to act like a Director. Not of just one
                  story, but of uncountless. A person who writes ones stories,
                  understands clearly the relationship with others in the plot,
                  and most importantly, never plays a role that someone else
                  wrote.
                </p>
                <p>
                  We are accountable for our lives everyday, all the time.
                  Non-stop. Our health, which is what really guarantees that we
                  are still breathing here in this immense blue rock in the
                  Universe, should be the most important thing for us. Along the
                  years, I have developed methodologies to ensure my mentees and
                  I are in the director seat of life. I can assure you that
                  achieve what we call Flow should be your goal. Let me help
                  you.
                </p>
                <p>
                  Enjoy every minute of the story you are writing for yourself.
                </p>
                <p>Needless to say:</p>
              </div>
              <p className="text-custom-testimonials font-automobile text-9xl flex justify-center pb-20">“3, 2, 1... Action!”</p>
            </div>
          </div>
          <div className="relative z-0 bg-custom-back2 h-3/5 -top-36"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
