import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "../../../../navigation";
import Image from "next/image";
import girafa from "../../../../public/Girafa.PNG";
import onoff from "../../../../public/OnOff.PNG";
import abc from "../../../../public/ABC.PNG";
import whatsappicon from "../../../../public/whatsapp-icon.png";
import { useTranslations } from "next-intl";

export default function Chapters() {
  const t = useTranslations("chapters");
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          className="absolute z-50 w-[240px] h-[2880px] right-0 top-12 bottom-40 max-lg:hidden"
          src={girafa}
          alt="Picture of the author"
        />
        <div className="relative z-0 bg-custom-bege1">
          <div className="relative z-0 bg-white h-24 -mt-16 rounded-bl-[96px] max-lg:rounded-bl-[40px] max-lg:-mt-6 max-lg:h-12"></div>
        </div>

        <div className="relative bg-white">
          <div className="absolute z-0 top-0 right-0 w-64 h-64 bg-white max-lg:hidden"></div>
          <div className="absolute z-0 bottom-0 right-0 w-64 h-64 bg-white max-lg:hidden"></div>
          <div className="relative z-10 rounded-r-[96px] bg-custom-bege1 px-36 max-lg:px-6 max-lg:rounded-r-[40px]">
            <h2 className="flex font-title text-custom-marrom1 text-6xl pb-6 pt-20 max-lg:justify-center max-lg:text-2xl max-lg:pt-10">
              Job ON Job OFF
              <Image
                className="w-24 pl-5 -mt-5 max-lg:w-16"
                src={onoff}
                alt="Picture of the author"
              />
            </h2>
            <div className="text-xl font-manrope max-lg:text-lg">
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>
                  {t.rich("text1", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich("text2", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich("text3", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
              </ul>
              <div className="space-y-6 pb-4">
                <p>
                  {t.rich("text4", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text5", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text6", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text27", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  <b>{t("text8")}</b>
                </p>
                <p>
                  {t.rich("text9", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>{t("text10")}</p>
                <p>
                  <b>{t("text11")}</b>
                </p>
                <p>
                  {t.rich("text12", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>{t("text28")}</p>
                <p>
                  {t.rich("text13", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <ul
                  role="list"
                  className="list-image-[url(/lampada.png)] pl-5 space-y-3 pb-8"
                >
                  <li>{t("text14")}</li>
                  <li>{t("text15")}</li>
                  <li>{t("text16")}</li>
                </ul>
              </div>
            </div>
            <div className="pb-24 max-lg:pb-6 max-lg:flex max-lg:justify-center max-lg:text-base">
              <Link href="https://wa.me/message/KWA4CXA3H5DTJ1" passHref>
                <button className="flex bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                  <Image
                    className="w-6 mr-2"
                    src={whatsappicon}
                    alt="whatsapp icon"
                  />
                  {t("text7")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute z-0 top-0 left-0 w-64 h-64 bg-custom-bege1"></div>
          <div className="absolute z-0 bottom-0 left-0 w-64 h-64 bg-white"></div>
          <div className="relative z-10 px-36 bg-white rounded-l-[96px] max-lg:px-6 max-lg:rounded-l-[40px]">
            <h2 className="flex font-title text-custom-marrom1 text-6xl pt-12 pb-6 max-lg:justify-center max-lg:text-2xl">
              Life’s ABC
              <Image
                className="w-24 pl-5 -mt-6 max-lg:w-16"
                src={abc}
                alt="Picture of the author"
              />
            </h2>
            <div className="text-xl font-manrope max-lg:text-lg">
              <ul
                role="list"
                className="marker:text-black-900 list-disc pl-5 space-y-3 pb-8"
              >
                <li>
                  {t.rich("text17", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich("text18", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
                <li>
                  {t.rich("text19", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </li>
              </ul>
              <div className="space-y-6 pb-6">
                <p>
                  {t.rich("text20", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text21", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                {/* <p>{t("text22")}</p> */}

                <p>
                  {t.rich("text22", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text23", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </div>

              <ul
                role="list"
                className="list-image-[url(/lampada.png)] pl-5 space-y-3 pb-8"
              >
                <li>{t("text24")}</li>
                <li>{t("text25")}</li>
                <li>{t("text26")}</li>
              </ul>
            </div>

            <div className="pb-20 max-lg:pb-6 max-lg:flex max-lg:justify-center max-lg:text-base">
              <Link href="https://wa.me/message/KWA4CXA3H5DTJ1" passHref>
                <button className="flex bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full">
                  <Image
                    className="w-6 mr-2"
                    src={whatsappicon}
                    alt="whatsapp icon"
                  />
                  {t("text7")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className=" bg-custom-bege2">
          <div className="px-64 bg-white rounded-r-[96px]">

            <h2 className="font-title text-custom-marrom1 text-6xl py-20">
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
        </div> */}
        <div className="bg-white">
          <div className="bg-custom-bege2 h-24 rounded-tl-[96px] max-lg:rounded-tl-[40px] max-lg:h-10"></div>
        </div>
      </div>

      <Footer />
    </>
  );
}
