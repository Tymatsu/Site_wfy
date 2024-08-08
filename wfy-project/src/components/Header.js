// "use client";
import Image from "next/image";
import { Link } from "../../navigation";
import image from "../../public/logotipo.png";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const t = useTranslations("header");

  return (
    <header className="bg-white flex flex-col lg:flex-row justify-between items-center h-auto w-full p-6 px-40">
      <Link href="/">
        <div className="flex justify-center items-center">
          <Image
            className="w-44 relative z-10"
            src={image}
            alt="Picture of the author"
          />
        </div>
      </Link>
      <nav className="hidden lg:flex">
        <ul className="flex gap-10 py-10">
          <li>
            <Link href={`/`} className="hover:underline underline-offset-8">
              Home
            </Link>
          </li>
          <li>
            <Link
              href={`/chapters`}
              className="hover:underline underline-offset-8"
            >
              {t("text1")}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline underline-offset-8">
              {t("text2")}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline underline-offset-8"
            >
              {t("text3")}
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/message/KWA4CXA3H5DTJ1">
              <button className="bg-custom-azul2 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full mt-[-1rem]">
                {t("text4")}
              </button>
            </Link>
          </li>
          <li>
            <LangSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
