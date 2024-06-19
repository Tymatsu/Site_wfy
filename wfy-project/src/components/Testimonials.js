import Image from "next/image";
import detail3 from "../../public/3.PNG";
import foto2 from "../../public/foto2.png";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text1: "Even though I mentored her a few years ago, she still has a lot of positive impacts on my life to this day. It was a very intense and sincere process of self-knowledge, which helped me to understand (and better communicate) my strengths and weaknesses.",
      text2: "I learned to tell about my journey here in a clear and coherent way and to show confidence. It was also very important for me to understand my career goals and which job opportunities best matched my ambitions.",
      text3: "Stephanie manages to create a safe environment for whatever her life moment, she listens to you without judgment and advises you on next steps in a positive and encouraging way as well as realistic. I strongly recommend mentoring with Stephanie and embracing this process of looking at yourself, ideas and career through her attentive and thoughtful eye.",
      image1: detail3,
      image2: foto2,
      name: "Roberta Versiani"
    },
    {
      id: 2,
      text1: "Even though I mentored her a few years ago, she still has a lot of positive impacts on my life to this day. It was a very intense and sincere process of self-knowledge, which helped me to understand (and better communicate) my strengths and weaknesses.",
      text2: "I learned to tell about my journey here in a clear and coherent way and to show confidence. It was also very important for me to understand my career goals and which job opportunities best matched my ambitions.",
      text3: "Stephanie manages to create a safe environment for whatever her life moment, she listens to you without judgment and advises you on next steps in a positive and encouraging way as well as realistic. I strongly recommend mentoring with Stephanie and embracing this process of looking at yourself, ideas and career through her attentive and thoughtful eye.",
      image1: detail3,
      image2: foto2,
      name: "Roberta Versiani"
    },
    {
      id: 3,
      text1: "Even though I mentored her a few years ago, she still has a lot of positive impacts on my life to this day. It was a very intense and sincere process of self-knowledge, which helped me to understand (and better communicate) my strengths and weaknesses.",
      text2: "I learned to tell about my journey here in a clear and coherent way and to show confidence. It was also very important for me to understand my career goals and which job opportunities best matched my ambitions.",
      text3: "Stephanie manages to create a safe environment for whatever her life moment, she listens to you without judgment and advises you on next steps in a positive and encouraging way as well as realistic. I strongly recommend mentoring with Stephanie and embracing this process of looking at yourself, ideas and career through her attentive and thoughtful eye.",
      image1: detail3,
      image2: foto2,
      name: "Roberta Versiani"
    }
  ];

  return testimonials.map((testimonial) => (
    <div key={testimonial.id} className="bg-white flex flex-col items-center p-20 w-[75%] mb-4 rounded-md drop-shadow-2xl">
      <p>{testimonial.text1}</p>
      <p>{testimonial.text2}</p>
      <p>{testimonial.text3}</p>
      <Image className="pt-4" src={testimonial.image1} alt="Picture of the author" />
      <Image className="" src={testimonial.image2} alt="Picture of the author" />
      <h1 className="font-title font-bold text-base">{testimonial.name}</h1>
    </div>
  ));
}
