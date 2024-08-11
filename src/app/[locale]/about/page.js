//"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import quotationLeft from "../../../../public/11.PNG";
import quotationRight from "../../../../public/12.PNG";
import circle1 from "../../../../public/circle1.png";
import circle2 from "../../../../public/circle2.png";
import circle3 from "../../../../public/circle3.png";
import circle4 from "../../../../public/circle4.png";
import pictureAbout from "../../../../public/pictureAbout.png";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  return (
    <main className="">
      <Header />
      <div>
        <div className="bg-custom-amarelo1 uppercase py-16 ">
          <div className="flex justify-evenly font-oswald font-light text-3xl  text-center">
            <div className="flex flex-col items-center w-1/6 -px-24">
              <Image
                className="w-44"
                src={circle1}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text1")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle2}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text2")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle3}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text3")}</p>
            </div>
            <div className="flex flex-col items-center w-1/6">
              <Image
                className="w-44"
                src={circle4}
                alt="Picture of the author"
              />
              <p className="break-words w-full">{t("text4")}</p>
            </div>
          </div>

          <p className="flex justify-end pr-24 font-oswald font-light text-2xl pt-5">
            {t("text5")}
          </p>
        </div>

        <div className="bg-custom-bege1 py-16">
          <p className="font-title font-bold text-2xl pl-24 pb-10">
            {t("text19")}
          </p>
          <div className="flex justify-center items-center">
            <Image
              className="w-32 relative -mb-20"
              src={quotationLeft}
              alt="Picture of the author"
            />
            <p className="font-automobile text-7xl mx-4">{t("text20")}</p>
            <Image
              className="w-32 relative -mt-20"
              src={quotationRight}
              alt="Picture of the author"
            />
          </div>
        </div>

        <div className="relative h-[120rem]">
          <div className="relative z-10 bg-custom-amarelo1 rounded-b-[96px] py-40 h-1/2 px-20">
            <div className="flex justify-center pb-40">
              <iframe
                src={"https://www.youtube.com/embed/iWOyfLBYtuU"}
                width={700}
                height={400}
                frameborder="10"
                sandbox
              />
            </div>
            <div className="bg-white px-12 -mb-48 shadow-2xl rounded-lg font-manrope">
              <div className="relative flex pb-12">
                <div className="absolute bottom-10 right-36 w-full">
                  <Image
                    className="w-[32rem] "
                    src={pictureAbout}
                    alt="Picture of the author"
                  />
                </div>
                <div className="w-1/2 ml-auto space-y-4">
                  <h2 className="font-automobile text-9xl text-custom-azul1">
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

              <div className="relative space-y-4 ">
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
              <p className="text-custom-laranja2 font-automobile text-9xl flex justify-center pb-20">
                {t("text18")}
              </p>
            </div>
          </div>
          <div className="relative z-0 bg-custom-bege1 h-3/5 -top-48"></div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
