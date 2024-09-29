//"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useLocale } from "next-intl";
import quotationLeft from "../../../../public/11.PNG";
import quotationRight from "../../../../public/12.PNG";
import circle1 from "../../../../public/circle1.png";
import circle2 from "../../../../public/circle2.png";
import circle3 from "../../../../public/circle3.png";
import circle4 from "../../../../public/circle4.png";
import circle5 from "../../../../public/circle5.png";
import circle6 from "../../../../public/circle6.png";
import circle7 from "../../../../public/circle7.png";
import tornado from "../../../../public/14.PNG";
import pictureAbout from "../../../../public/pictureAbout.png";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const imagesEn = [circle7, circle4, circle5, circle6];
  const imagesPt = [circle7, circle1, circle2, circle3];
  const images = locale === "pt" ? imagesPt : imagesEn;

  return (
    <main className="">
      <Header />
      <div>
        <div className="bg-custom-amarelo1 uppercase py-16 max-lg:py-3">
          <div className="flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-evenly font-oswald font-light text-3xl text-center max-lg:space-y-12 max-lg:text-2xl">
            <div className="flex flex-col items-center w-1/6 -px-24 max-lg:w-1/2">
              <Image
                className="w-44"
                src={images[0]}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text1")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6 max-lg:w-1/2">
              <Image
                className="w-44"
                src={images[1]}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text2")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6 max-lg:w-1/2">
              <Image
                className="w-44"
                src={images[2]}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text3")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6 max-lg:w-1/2">
              <Image
                className="w-44"
                src={images[3]}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text4")}</p>
            </div>
          </div>

          <p className="flex justify-end pr-24 font-oswald font-light text-2xl pt-5 max-lg:justify-center max-lg:p-0 max-lg:py-10 max-lg:font-medium">
            {t("text5")}
          </p>
        </div>

        <div className="bg-custom-bege1 py-16">
          <p className="font-title font-bold text-2xl pl-24 pb-10 max-lg:text-left max-lg:pl-10">
            {t("text19")}
          </p>
          <div className="relative flex justify-center items-center ">
            <Image
              className="w-32 relative -mb-20 max-lg:absolute max-lg:bottom-10 max-lg:-left-0"
              src={quotationLeft}
              alt="Picture of the author"
            />
            <p className="font-automobile text-custom-cinza1 text-7xl mx-4 max-lg:mx-20 max-lg:text-center max-lg:leading-none">
              {t("text20")}
            </p>
            <Image
              className="w-32 relative -mt-20 max-lg:absolute max-lg:top-10 max-lg:-right-0"
              src={quotationRight}
              alt="Picture of the author"
            />
          </div>
          <div className="flex justify-center pt-20 pb-0">
            <iframe
              className="max-lg:w-full"
              src={t("text21")}
              width={700}
              height={400}
              allowFullScreen
            />
          </div>
        </div>
        {/* mobile1 e mobile2 nao estao funcionando nesse caso */}
        <div className="bg-custom-bege1 lg:h-[90rem] max-lg:h-[135rem] mobile3:min-h-[150rem] mobile2:min-h-[163rem] mobile1:min-h-[185rem]">
          <div className=" relative bg-custom-amarelo1 rounded-b-[96px] px-20 max-lg:px-4 h-[53%] ">
            <div className=" bg-white px-12 shadow-2xl rounded-lg font-manrope max-lg:px-4 max-lg:text-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-5/6 max-lg:w-[95%]">
              <div className="relative pb-12 max-lg:pb-4">
                <div className="absolute bottom-10 right-36 w-full max-lg:bottom-0 max-lg:-top-44 max-lg:right-1/2 max-lg:transform max-lg:translate-x-1/2 max-lg:w-80">
                  <Image
                    className="w-[32rem] max-lg:w-80"
                    src={pictureAbout}
                    alt="Picture of the author"
                  />
                </div>

                <div className="w-1/2 ml-auto space-y-4 max-lg:ml-0 max-lg:w-full max-lg:pt-40">
                  <h2 className="font-automobile text-9xl text-custom-azul1 max-lg:text-8xl max-lg:text-center">
                    {t("text6")}
                  </h2>
                  <p>
                    {t.rich("text7", {
                      boldText: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <p>
                    {t.rich("text8", {
                      boldText: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                  <p>
                    {t.rich("text9", {
                      boldText: (chunks) => <strong>{chunks}</strong>,
                    })}
                  </p>
                </div>
              </div>

              <div className="space-y-4 ">
                <p>
                  {t.rich("text10", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text11", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text12", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text13", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text14", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text15", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>
                  {t.rich("text16", {
                    boldText: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
                <p>{t("text17")}</p>
              </div>
              <p className="text-custom-laranja2 font-automobile text-9xl flex justify-center pb-12 max-lg:text-8xl">
                {t("text18")}
              </p>
              <div className="absolute -bottom-20 -right-12 max-lg:-right-1 max-lg:-bottom-10">
                <Image
                  className="w-64 max-lg:w-28"
                  src={tornado}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
