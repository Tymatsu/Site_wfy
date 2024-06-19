import Image from "next/image";
import Link from "next/link";
import image from "../../public/Logo.PNG";
import copyright from "../../public/copyright.png";
import instagramLogo from "../../public/instagram_logo.png";
import whatsappLogo from "../../public/whatsapp_logo.png";

const Footer = () => {
  return (
    <div className="bg-custom-back2 flex justify-around h-auto">
      <div>
        <Image className="w-36 h-36" src={image} alt="Picture of the author" />
        <div className="flex justify-around">
          <Image
            className="w-9 h-9"
            src={instagramLogo}
            alt="Picture of the author"
          />
          <Image
            className="w-9 h-9"
            src={whatsappLogo}
            alt="Picture of the author"
          />
        </div>
      </div>

      <nav>
        <ul className="flex gap-10 py-12">
          <li>
            <Link href="/chapters" legacyBehavior>
              <a className="hover:underline">Chapters</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
        <div className="flex">
          <Image className="w-3.5 h-3.5" src={copyright} alt="Picture of the author" />
          <b>2024 What Flows You.</b> All rights reserved
        </div>
      </nav>
    </div>
  );
};

export default Footer;
