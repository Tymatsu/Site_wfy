import Image from "next/image";
import Link from "next/link";
import image from "../../public/logotipo.png";

const Header = () => {
  return (
    <header className="bg-white flex justify-between h-auto w-full p-[25px] px-[160px] ">
      <Image
        className="w-[179px] h-[140px] relative z-10"
        src={image}
        alt="Picture of the author"
      />
      <nav>
        <ul className="flex gap-10 py-10">
          <li className="">
            <Link href="/" legacyBehavior>
              <a className="hover:underline underline-offset-8">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/chapters" legacyBehavior>
              <a className="hover:underline underline-offset-8">Chapters</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="hover:underline underline-offset-8">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a className="hover:underline underline-offset-8">Contact</a>
            </Link>
          </li>
          <button class="bg-blue-200 hover:bg-blue-700 hover:text-white text-blue-700 py-[13px] px-[28px] rounded-full mt-[-1rem]">
              Book an appointment
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
