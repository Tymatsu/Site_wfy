import Image from "next/image";
import { Link } from "../../navigation";
import image from "../../public/logotipo.png";
import { useTranslations } from "next-intl";
import LangSwitcher from "./LangSwitcher";
import MobileMenu from "./MobileMenu"; // Importe o componente MobileMenu

const Header = () => {
  const t = useTranslations("header");

  // Chame as traduções aqui e passe como props
  const translations = {
    home: "Home",
    text1: t("text1"),
    text2: t("text2"),
    text3: t("text3"),
    text4: t("text4"),
  };

  return (
    <header className="relative bg-white flex lg:flex-row justify-between items-center h-auto w-full p-6 px-20">
      {/* Passando as traduções como props para o MobileMenu */}
      <div className="absolute left-10">
        <MobileMenu translations={translations} />
      </div>

      {/* Centralizando a logo */}
      <Link
        href="/"
        className="max-lg:w-full max-lg:flex max-lg:justify-center"
      >
        <div className="flex justify-center items-center">
          <Image className="w-36 relative z-10" src={image} alt="Logo" />
        </div>
      </Link>

      {/* Menu para desktop - visível apenas em lg */}
      <nav className="hidden lg:flex">
        <ul className="flex gap-8 py-10">
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
              {translations.text1}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline underline-offset-8">
              {translations.text2}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:underline underline-offset-8"
            >
              {translations.text3}
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/message/KWA4CXA3H5DTJ1">
              <button className="bg-custom-azul2 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full mt-[-1rem]">
                {translations.text4}
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
