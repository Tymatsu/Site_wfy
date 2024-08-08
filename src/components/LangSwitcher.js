"use client";
import React from "react";
import Image from "next/image";
//import { useRouter } from "next/navigation";
import enFlag from "../../public/en.PNG";
import ptFlag from "../../public/pt.PNG";
import {Link, usePathname, useRouter} from "../../navigation";

const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const options = [
    { code: "en", flag: enFlag },
    { code: "pt", flag: ptFlag },
  ];

  const setOption = (option) => {
    router.push(pathname,{locale:`${option.code}`});
  };

  return (
    <div className="flex items-center justify-center">
      {options.map((option, index) => (
        <div
          key={index}
          className="cursor-pointer mx-2"
          onClick={() => setOption(option)}
        >
          <Image
            src={option.flag}
            width={30}
            height={20}
            alt={`${option.code} flag`}
          />
        </div>
      ))}
    </div>
  );
};

export default LangSwitcher;
