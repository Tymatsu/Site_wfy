import Image from "next/image";
import detail3 from "../../public/3.PNG";
import foto2 from "../../public/foto2.png";
import foto3 from "../../public/foto3.png";
//import foto4 from "../../public/foto4.png";
import foto5 from "../../public/foto5.png";
import foto6 from "../../public/foto6.png";
import foto7 from "../../public/foto7.png";

export default function Testimonials({ t }) {
  const testimonials = [
    {
      id: 1,
      text1: t("text54"),
      text2: t("text55"),
      text4: t("text56"),
      image1: detail3,
      image2: foto2,
      name: "R.V.",
    },
    {
      id: 2,
      text1: t("text63"),
      text2: t("text64"),
      text3: t("text65"),
      text4: t("text66"),
      image1: detail3,
      image2: foto6,
      name: "G.V.",
    },
    {
      id: 3,
      text1: t("text57"),
      text2: t("text58"),
      text4: t("text59"),
      image1: detail3,
      image2: foto3,
      name: "M.B.",
    },
    {
      id: 4,
      text1: t("text60"),
      text2: t("text61"),
      text4: t("text62"),
      image1: detail3,
      image2: foto5,
      name: "B.T.",
    },
    {
      id: 5,
      text1: t("text67"),
      text2: t("text68"),
      text4: t("text69"),
      image1: detail3,
      image2: foto7,
      name: "M.T.",
    },
  ];

  return testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="bg-white flex flex-col items-center px-40 py-28 w-[75%] mb-4 rounded-md drop-shadow-2xl font-manrope font-light text-custom-cinza3 text-xl max-lg:px-8 max-lg:w-11/12 max-lg:pt-16"
    >
      <span className="text-9xl font-manrope absolute left-28 top-20 max-lg:hidden">
        “
      </span>

      <div className="space-y-8 max-lg:relative">
        <p>
          <span className="text-9xl absolute font-manrope -top-12 -left-9 lg:hidden">
            “
          </span>
          {testimonial.text1}
        </p>
        <p className="">{testimonial.text2}</p>
        <p className="">{testimonial.text3}</p>
        <p className=" relative">
          {testimonial.text4}
          <span className="text-9xl absolute">”</span>
        </p>
      </div>

      <Image
        className="pt-8"
        src={testimonial.image1}
        alt="Picture of the author"
      />
      <Image
        className="w-40"
        src={testimonial.image2}
        alt="Picture of the author"
      />
      <h1 className="font-title font-bold text-base">{testimonial.name}</h1>
    </div>
  ));
}
