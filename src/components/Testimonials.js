import Image from "next/image";
import detail3 from "../../public/3.PNG";
import foto2 from "../../public/foto2.png";
import foto3 from "../../public/foto3.png";
import foto4 from "../../public/foto4.png";

export default function Testimonials({ t }) {
  const testimonials = [
    {
      id: 1,
      text1: t("text54"),
      text2: t("text55"),
      text3: t("text56"),
      image1: detail3,
      image2: foto2,
      name: "R.V.",
    },
    {
      id: 2,
      text1: t("text57"),
      text2: t("text58"),
      text3: t("text59"),
      image1: detail3,
      image2: foto3,
      name: "M.B.",
    },
    {
      id: 3,
      text1: t("text60"),
      text2: t("text61"),
      text3: t("text62"),
      image1: detail3,
      image2: foto4,
      name: "T.F.",
    },
    {
      id: 4,
      text1: t("text60"),
      text2: t("text61"),
      text3: t("text62"),
      image1: detail3,
      image2: foto4,
      name: "T.F.",
    },
    {
      id: 5,
      text1: t("text60"),
      text2: t("text61"),
      text3: t("text62"),
      image1: detail3,
      image2: foto4,
      name: "T.F.",
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

      <div className="">
        <p>
          <span className="text-9xl font-manrope absolute left-0 top-4 lg:hidden">
            “
          </span>
          {testimonial.text1}
        </p>
        <p className="pt-8">{testimonial.text2}</p>
        <p className="pt-8 relative">
          {testimonial.text3} <span className="text-9xl absolute">”</span>
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
