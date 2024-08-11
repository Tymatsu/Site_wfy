import Image from "next/image";
import { Link } from "../../navigation";
import image from "../../public/Logo.PNG";
import instagramLogo from "../../public/instagram_logo.png";
import whatsappLogo from "../../public/whatsapp_logo.png";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <div className="bg-custom-bege2 flex flex-col items-center lg:items-start lg:flex-row justify-around h-auto pb-4 font-title">
      <div className="text-center lg:text-left">
        <div className="flex justify-center lg:justify-center gap-4 mt-4">
        <Image className="w-36 h-36 mx-auto lg:mx-0" src={image} alt="Picture of the author" />
          <Link
            href="https://www.instagram.com/whatflows.u?igsh=MXdjNGJ1c2J4Y2RzbQ=="
            passHref
          >
            <Image
              className="w-9 h-9 mt-10"
              src={instagramLogo}
              alt="Instagram Logo"
            />
          </Link>
          <Link href="https://wa.me/message/KWA4CXA3H5DTJ1" passHref>
            <Image className="w-9 h-9 mt-10" src={whatsappLogo} alt="WhatsApp Logo" />
          </Link>
        </div>
      </div>
      <div className="text-center lg:text-left">
        <nav className="hidden lg:flex">
          <ul className="flex gap-10 py-12 font-bold text-xl text-custom-cinza1">
            <li>
              <Link
                href="/chapters"
                className="hover:underline underline-offset-8"
              >
                {t("text1")}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline underline-offset-8"
              >
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
                <button className="font-manrope text-sm font-normal bg-custom-azul2 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full mt-[-1rem]">
                  {t("text5")}
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center lg:justify-start text-custom-cinza1 pt-16 ">
          <p className="font-manrope text-xl">
            <b className="pr-2 font-title">© 2024 What Flows You.</b>{" "}
            {t("text4")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
