"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale } from 'next-intl';

import courageous from "../../public/courageous.png";
import free from "../../public/free.png";
import healthy from "../../public/healthy.png";
import joyful from "../../public/joyful.png";
import seen from "../../public/seen.png";
import successful from "../../public/successful.png";

import sucesso from "../../public/sucesso.png";
import coragem from "../../public/coragem.png";
import alegria from "../../public/alegria.png";
import saude from "../../public/saude.png";
import humildade from "../../public/humildade.png";
import liberdade from "../../public/liberdade.png";

const RotatingImage = () => {
    const locale = useLocale();

    const imagesEn = [courageous, seen, successful, free, healthy, joyful];
    const imagesPt = [sucesso, coragem, alegria, saude, humildade, liberdade];
    const images = locale === 'pt' ? imagesPt : imagesEn; // Escolhe o array de imagens com base na localidade
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setFade(false); // Inicia o fade-out
        setTimeout(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
          setFade(true); // Inicia o fade-in
        }, 300); // Ajuste o tempo de esmaecimento aqui (500ms)
      }, 1700); // Muda a imagem a cada 2 segundos
  
      return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, [images.length]);
  
    return (
      <div className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} h-[38px]`}>
        <Image
          className="pl-6 w-72 object-cover max-lg:pl-0"
          src={images[currentImageIndex]}
          alt="Picture of the author"
        />
      </div>
    );
  };

export default RotatingImage;
