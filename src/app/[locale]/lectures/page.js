import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "../../../../navigation";
import Image from "next/image";
import girafa from "../../../../public/Girafa.PNG";
import onoff from "../../../../public/OnOff.PNG";
import abc from "../../../../public/ABC.PNG";
import { useTranslations } from "next-intl";

export default function Chapters() {
  const t = useTranslations("chapters");
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          className="absolute z-50 w-[240px] h-[2880px] right-0 top-12 bottom-40"
          src={girafa}
          alt="Picture of the author"
        />
        <div className="relative z-0 bg-custom-bege1">
          <div className="relative z-0 bg-white h-24 -mt-16 rounded-bl-[96px]"></div>
        </div>
     export default function MeuLivro() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">Palestras</h1>
      <p className="mt-4">
        Aqui você pode apresentar informações sobre a sua palestra.
      </p>
    </main>
  );
}
