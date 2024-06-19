import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import girafa from "../../../public/Girafa.PNG";

export default function Chapters() {
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          className="absolute z-50 w-[350px] right-0 -top-12"
          src={girafa}
          alt="Picture of the author"
        />
        <div className="relative z-0 bg-custom-bgJOJO">
          <div className="relative z-0 bg-white h-24 -mt-16 rounded-bl-[96px]"></div>
        </div>

        <div className="relative bg-white">
          <div className="absolute z-0 top-0 right-0 w-64 h-64 bg-white"></div>
          <div className="absolute z-0 bottom-0 right-0 w-64 h-64 bg-custom-back2"></div>
          <div className="relative z-10 rounded-r-[96px] bg-custom-bgJOJO px-64">
            {/* JOJO */}
            <h2 className="font-title text-custom-titleJOJO text-6xl pb-20 pt-20">
              Job ON Job OFF (JOJO)
            </h2>
            <div className="text-xl font-manrope">
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>
                  Are you eager to finally land that competitive job offer from
                  the company of your dreams?
                </li>
                <li>
                  Have you found yourself misplaced while working at your
                  current job?
                </li>
                <li>
                  Do you often feel tired and unhappy with your professional
                  life?
                </li>
                <li>
                  Have you recently browsed LinkedIn to look for open positions?
                </li>
                <li>
                  On Monday, did you start your work already longing for your
                  Friday?
                </li>
              </ul>
              <div className="space-y-4 pb-4">
                <p>
                  The JOJO Chapter will assist you to ensure you will find a
                  career that truly meets your needs and ambitions, and most
                  importantly, guide you through the recruitment process to turn
                  you into a very competitive candidate on interviews.
                </p>
                <p>
                  We are constantly changing. It is something we cannot control.
                  However, we usually do not pause to reflect about these life
                  changes to adjust our career to suit them. Actually, we quite
                  do the opposite. Have the courage to strategically assess your
                  career. Not in 5 or 10 years. But now.
                </p>
                <p>
                  Former WFY mentees have landed jobs at big companies such as:
                  McKinsey & Company, BCG, Bain & Company, Kearney, EY
                  Parthenon, OC&C Strategy Consultants, and many others.
                </p>
              </div>
            </div>
            <div className="pb-24">
              <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                Book an appointment
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 top-0 left-0 w-64 h-64 bg-custom-bgJOJO"></div>
          <div className="absolute z-0 bottom-0 left-0 w-64 h-64 bg-white"></div>
          <div className="relative z-10 px-64 bg-custom-back2 rounded-l-[96px]">
            {/* Life’s ABC */}
            <h2 className="font-title text-custom-titleJOJO text-6xl py-20">
              Life’s ABC
            </h2>
            <div className="text-xl font-manrope">
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>Are you tired of keeping a well-known boring routine?</li>
                <li>
                  Are you constantly reminiscing about the Golden years of your
                  life?
                </li>
                <li>Have you wondered how can you have more energy?</li>
              </ul>
              <p>
                The 60+ Ambitions Chapter will take you on a journey of
                self-knowledge and discovery of passions that were hidden your
                entire life. What Flows You can help you redesign your life the
                way it should be: happy and fulfilling!
              </p>

              <p>Some of the topics covered:</p>
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>In-depth self-knowledge</li>
                <li>The untold advantages of being a newbie</li>
                <li>Day One vs One Day</li>
              </ul>
            </div>

            <div className="pb-20">
              <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                Book an appointment
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-custom-back2">
          {/* <div className="absolute z-0 top-0 right-0 w-64 h-64 bg-custom-back2"></div> */}
          <div className="px-64 bg-white rounded-r-[96px]">
            {/* BRAxit */}

            <h2 className="font-title text-custom-titleJOJO text-6xl py-20">
              BRAxit
            </h2>
            <div className="text-xl font-manrope">
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>
                  In Brazil, do you constantly feel afraid of being robbed?
                </li>
                <li>
                  Have you ever wondered whether you would be better off living
                  in other countries?
                </li>
                <li>Have you ever felt hopeless about the future of Brazil?</li>
              </ul>
              <div className="space-y-4 pb-4">
                <p>
                  Unfortunately, I answer "Yes" to all of these questions.
                  Having been born and lived for over 25 years in Brazil, I know
                  how you feel sometimes. I was once in the same situation as
                  you, limiting myself fearing of what could happen to me.
                  Countless times, while walking on the streets of Brazil, I
                  found myself thinking about different episodes such as: what
                  if I get beaten with a firearm for nothing again? Would they
                  take my cell phone? Wallet? Or my entire dignity? I've
                  experienced all of this while living in Brazil.
                </p>
                <p>
                  I created the BRAxit module to help more Brazilians move
                  abroad fostering a better quality of life. I guarantee that of
                  the 192 other countries that exist in the world, there are at
                  least one that you would fit into. Let's find out together and
                  change your life once and for all?
                </p>
                <p>
                  Just because you were born in a country doesn't mean you have
                  to live your whole life there until you die. Believe me, you
                  have the right to feel beloonging to where you live. Let WFY
                  help you with that!
                </p>
              </div>
            </div>

            <div className="pb-20">
              <button className="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                Book an appointment
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white relative z-100">
          <div className="bg-custom-back2 h-24 rounded-tl-[96px] relative z-100"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
