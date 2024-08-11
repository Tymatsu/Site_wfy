import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "../../../navigation";
import RotatingImage from "@/components/RotatingImage";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import detail from "../../../public/1.PNG";
import div from "../../../public/3.PNG";
import card1 from "../../../public/4.PNG";
import card2 from "../../../public/5.PNG";
import card3 from "../../../public/6.PNG";
import a from "../../../public/A.png";
import l from "../../../public/L.png";
import n from "../../../public/N.png";
import p from "../../../public/P.png";
import bcg from "../../../public/Boston_Consulting_Group.png";
import mc from "../../../public/McKinsey.png";
import kea from "../../../public/Kearney.png";
import bc from "../../../public/Bain & Company.png";
import ey from "../../../public/ey-parthenon.png";
import lk from "../../../public/LinkedIn.png";
import am from "../../../public/Ambev.png";
import ci from "../../../public/Citibank.png";
import en from "../../../public/entrada.png";
import be from "../../../public/belgravia.png";
import ab from "../../../public/AB-InBev.png";
import detailPlan from "../../../public/17.PNG";
import foto1 from "../../../public/foto1.png";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <>
      <Header t={t} />
      <div className="bg-gradient-to-b from-custom-amarelo1 to-custom-bege1 pb-48 -mb-24">
        <div className="flex flex-col lg:flex-row space-x-6 lg:px-20 p-20 lg:items-start items-center">
          <div className=" lg:text-left">
            <div className=" font-title text-custom-cinza1">
              <div className="max-lg:flex max-lg:space-x-5 max-lg:justify-start">
                <p className="text-7xl max-lg:text-5xl">{t("text1")}</p>
                <p className="text-7xl max-lg:text-5xl">{t("text2")}</p>
              </div>
              <div className="flex justify-center lg:justify-start max-lg:flex-col max-lg:text-start">
                <p className="text-7xl max-lg:text-5xl ">{t("text3")}</p>
                <div className="max-lg:flex max-lg:justify-start">
                  <RotatingImage />
                </div>
              </div>
              <p className="text-7xl max-lg:text-5xl max-lg:pt-12">
                {t("text46")}
              </p>
              <p className="text-7xl max-lg:text-5xl">{t("text45")}</p>
            </div>
            <div className="max-lg:flex max-lg:justify-center max-lg:pt-12">
              <Image
                className="lg:hidden w-3/4 pt-6"
                src={foto1}
                alt="Picture of the author"
              />
            </div>
            <p className="text-xl font-oswald py-10 text-custom-cinza1 max-lg:flex max-lg:justify-center">
              {t("text4")}
            </p>
            <Link
              href="#chapters"
              className="max-lg:flex max-lg:justify-center"
            >
              <button className="bg-custom-azul1 hover:bg-blue-700 text-white font-manrope font-semibold py-4 px-7 rounded-full max-lg:jus">
                {t("text5")}
              </button>
            </Link>
          </div>
          <Image
            className="hidden lg:block absolute w-[30rem] right-8 top-32"
            src={foto1}
            alt="Picture of the author"
          />
        </div>

        <div className="pt-32 font-title pb-20 text-custom-cinza1 max-lg:pt-0">
          <p className="text-4xl flex items-end justify-center max-lg:flex-col max-lg:items-center max-lg:text-2xl">
            {t("text6")}
            <div className="-mb-24 max-lg:text-center">
              <b className="text-8xl pl-4 max-lg:pl-0 max-lg:text-3xl ">
                P-L-A-N.
              </b>
              <Image
                className="w-[25rem] max-lg:w-56"
                src={detailPlan}
                alt="detail plan"
              />
            </div>
          </p>
          <div className="flex justify-center">
            <p className="text-4xl pt-12 -ml-[38rem] max-lg:ml-0 max-lg:pt-24 max-lg:text-2xl">
              {t("text7")}
            </p>
          </div>
          <div className="flex justify-center">
            <p className="text-xl pt-6 max-lg:text-lg max-lg:px-2">
              {t("text38")}
            </p>
          </div>
          <p className="flex justify-center font-oswald text-2xl font-light pt-16 pl-[39rem] text-custom-cinza2 max-lg:p-0 max-lg:text-base">
            - WHAT FLOWS YOU
          </p>
        </div>

        <div className="font-title">
          <div className="block pl-20 max-lg:pl-0">
            <figure className="relative inline-block w-[35rem] mr-auto max-lg:w-full">
              <Image
                className="w-full block"
                src={p}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 ml-12">
                <p className="text-center text-4xl text-white mb-5 font-semibold max-lg:text-2xl max-lg:mb-2">
                  <span className="text-6xl max-lg:text-2xl">1. </span> PERSONAL
                  <p className="text-lg font-light max-lg:text-sm">
                    {t("text39")}
                  </p>
                </p>
                <p className="text-center text-2xl text-white w-full font-manrope font-light px-4 max-lg:text-base max-lg:px-0">
                  {t("text8")}
                  <br />
                  {t("text9")}
                  <br />
                  {t("text10")}
                  <br />
                  {t("text11")}
                  <br />
                  {t("text12")}
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title -mt-12 max-lg:mt-0">
          <div className="flex justify-end pr-12 max-lg:justify-center max-lg:pr-0">
            <figure className="relative inline-block w-[30rem] ml-auto max-lg:w-full ">
              <Image
                className="w-full block"
                src={l}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 mr-12">
                <p className="text-center text-4xl text-white mb-5 font-semibold max-lg:text-2xl max-lg:mb-2">
                  <span className="text-6xl max-lg:text-3xl">2. </span> LOVING
                  <p className="text-lg font-light max-lg:text-sm">
                    {t("text40")}
                  </p>
                </p>
                <p className="text-center text-2xl text-white w-full px-4 font-manrope font-light max-lg:text-base max-lg:px-0">
                  {t("text13")}
                  <br />
                  {t("text14")}
                  <br />
                  {t("text15")}
                  <br />
                  {t("text16")}
                  <br />
                  {t("text17")}
                  <br />
                  {t("text18")}
                  <br />
                  {t("text19")}
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title">
          <div className="flex pl-20 max-lg:pl-0">
            <figure className="relative inline-block w-[35rem] mr-auto max-lg:w-full">
              <Image
                className="w-full block"
                src={a}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="text-center text-4xl text-white mb-5 font-semibold max-lg:text-2xl max-lg:mb-2">
                  <span className="text-6xl max-lg:text-3xl">3. </span>{" "}
                  ACTIONABLE
                  <p className="text-lg font-light max-lg:text-sm">
                    {t("text43")}
                  </p>
                </p>
                <p className="text-center text-2xl text-white w-full font-manrope font-light px-4 max-lg:text-base max-lg:px-0">
                  {t("text20")}
                  <br />
                  {t("text21")}
                  <br />
                  {t("text22")}
                  <br />
                  {t("text23")}
                  <br />
                  {t("text24")}
                </p>
              </div>
            </figure>
          </div>
        </div>

        <div className="font-title -mt-12 max-lg:mt-0">
          <div className="flex justify-end pr-12 max-lg:pr-0">
            <figure className="relative inline-block w-[35rem] ml-auto max-lg:w-full">
              <Image
                className="w-full block"
                src={n}
                alt="Picture of the author"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="text-center text-4xl text-white mb-5 font-semibold max-lg:text-2xl max-lg:mb-2">
                  <span className="text-6xl max-lg:text-3xl">4. </span>{" "}
                  NOURISHING
                  <p className="text-lg font-light max-lg:text-sm">
                    {t("text44")}
                  </p>
                </p>
                <p className="text-center text-2xl text-white w-full font-manrope font-light px-4 max-lg:text-base max-lg:px-0">
                  {t("text25")}
                  <br />
                  {t("text26")}
                  <br />
                  {t("text27")}
                  <br />
                  {t("text28")}
                  <br />
                  {t("text29")}
                </p>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div
        id="chapters"
        className="rounded-[96px] max-lg:rounded-3xl bg-custom-laranja1 p-16 relative z-10 text-custom-cinza1 max-lg:px-0 "
      >
        <p className="text-4xl text-center font-title font-semibold pb-6 ">
          {t("text30")}
        </p>
        <p className="text-2xl text-center font-manrope pb-2 text-custom-cinza2 max-lg:text-lg max-lg:p-2">
          {t.rich("text31", {
            boldText: (chunks) => <strong>{chunks}</strong>,
          })}
        </p>
        <p className="text-2xl text-center font-manrope pb-6 text-custom-cinza2 max-lg:text-lg max-lg:p-2">
          {t("text32")}
        </p>
        <div className="flex flex-col items-center space-y-6 p-4 font-manrope">
          <div className="bg-white text-center flex flex-col items-center w-[50rem] p-12 rounded-3xl overflow-hidden max-lg:w-full max-lg:p-3">
            <Image
              className="size-64"
              src={card1}
              alt="Picture of the author"
            />
            <p className="text-4xl font-title pb-10">Job ON Job OFF</p>
            <div className="text-left space-y-6 pb-6 max-w-full ">
              <p>
                {t.rich("text33", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>

              <p>
                {t.rich("text37", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>{t("text34")}</p>
            </div>
            <div className="flex space-x-6 max-w-full  font-montserrat">
              {/* mobile */}
              <div className="space-y-3 lg:hidden">
                <h3 className="text-3xl text-custom-laranja2">{t("text35")}</h3>
                <div className="flex justify-center">
                  <Image className="w-52" src={mc} alt="" />
                </div>
                <div className="flex justify-center">
                  <Image className="w-36" src={bcg} alt="" />
                </div>
                <div className="flex justify-center">
                  <Image className="w-36" src={kea} alt="" />
                </div>
                <div className="flex justify-center">
                  <Image className="w-52" src={bc} alt="" />
                </div>
                <div className="flex justify-center">
                  <Image className="w-36" src={ey} alt="" />
                </div>
                <div className="flex justify-center py-6">
                  <Image className="w-48" src={div} alt="" />
                </div>
                <h3 className="text-3xl text-custom-laranja2">{t("text41")}</h3>
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <Image className="w-36" src={lk} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={am} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={ci} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={ab} alt="" />
                  </div>
                </div>
              </div>
                  {/* desktop     */}
              <div className="bg-custom-laranja2 rounded-2xl p-6 w-[20rem] space-y-3 max-w-full max-lg:hidden relative">
                <h3 className="text-3xl">{t("text35")}</h3>
                <div className="space-y-5 pb-10">
                  <div className="flex justify-center pt-6">
                    <Image className="w-52" src={mc} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-20" src={bcg} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-72" src={bc} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={kea} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={ey} alt="" />
                  </div>
                </div>
                <p className="absolute bottom-0 right-0 mb-4 mr-4 text-end text-xl">
                  {t("text36")}
                </p>
              </div>

              <div className="bg-custom-laranja2 rounded-2xl p-6 w-[20rem] space-y-3 max-w-full max-lg:hidden relative">
                <h3 className="text-3xl">{t("text41")}</h3>
                <div className="space-y-3 pb-10">
                  <div className="flex justify-center">
                    <Image className="w-36" src={lk} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={am} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={ci} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={en} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-52" src={be} alt="" />
                  </div>
                  <div className="flex justify-center">
                    <Image className="w-36" src={ab} alt="" />
                  </div>
                </div>
                <p className="absolute bottom-0 right-0 mb-4 mr-4 text-end text-xl">
                  {t("text42")}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white text-center flex flex-col items-center w-[50rem] p-12 rounded-3xl max-lg:w-full max-lg:p-3">
            <Image
              className="size-64"
              src={card2}
              alt="Picture of the author"
            />
            <p className="text-4xl font-title pb-10">Life's ABC</p>
            <div className="text-left space-y-6">
              <p>
                {t.rich("text47", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("text48", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("text49", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
              <p>
                {t.rich("text50", {
                  boldText: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            className="w-[20rem] pt-20 pb-16"
            src={detail}
            alt="Picture of the author"
          />
          <p className="text-3xl pb-10 font-oswald uppercase text-custom-cinza2 max-lg:px-3 max-lg:text-center">
            {t("text51")}
          </p>
          <Link href="https://wa.me/message/KWA4CXA3H5DTJ1">
            <button className="bg-custom-azul2 hover:bg-blue-700 hover:text-white text-custom-azul1 py-[13px] px-[28px] rounded-full">
              {t("text52")}
            </button>
          </Link>
        </div>
      </div>

      <div className="relative z-0 bg-custom-laranja2 -mt-24 pt-32">
        <h3 className="text-center text-5xl font-title text-custom-bege1 pt-20 pb-12 font-semibold">
          {t("text53")}
        </h3>
        <div className="pb-56 max-lg:pb-16">
          <Carousel slides={<Testimonials t={t} />} />
        </div>
      </div>
      <Footer />
    </>
  );
}
