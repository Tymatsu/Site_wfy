import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Link } from "../../../../navigation";
import Image from "next/image";
import girafa from "../../../../public/Girafa.PNG";
import onoff from "../../../../public/OnOff.PNG";
import abc from "../../../../public/ABC.PNG";
import { useTranslations } from "next-intl";

export default function Chapters() {
  const t = useTranslations("chapters");
  return (
    <>
      <Header />
      <div className="relative">
        <Image
          className="absolute z-50 w-[240px] h-[2880px] right-0 top-12 bottom-40"
          src={girafa}
          alt="Picture of the author"
        />
        <div className="relative z-0 bg-custom-bege1">
          <div className="relative z-0 bg-white h-24 -mt-16 rounded-bl-[96px]"></div>
        </div>

        <div className="relative bg-white">
          <div className="absolute z-0 top-0 right-0 w-64 h-64 bg-white"></div>
          <div className="absolute z-0 bottom-0 right-0 w-64 h-64 bg-white"></div>
          <div className="relative z-10 rounded-r-[96px] bg-custom-bege1 px-36">
            <h2 className="flex font-title text-custom-marrom1 text-6xl pb-6 pt-20">
              Job ON Job OFF
              <Image
                className="w-24 pl-5 -mt-5"
                src={onoff}
                alt="Picture of the author"
              />
            </h2>
  
"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useParams } from "next/navigation";

// Configurando o worker do pdf.js com base na versão instalada
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function MyBookPage() {
  // Obtém o parâmetro de rota dinâmico "locale"
  const { locale } = useParams();

  // Estados para o PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Função chamada quando o PDF é carregado com sucesso
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // Função para ir à página anterior (garante que não seja menor que 1)
  function goToPrevPage() {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  }

  // Função para ir à próxima página (garante que não exceda o total de páginas)
  function goToNextPage() {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Fundo com gradientes radiais simulando um design orgânico */}
      <div
        className="absolute inset-0 z-[-1] bg-[length:400px_400px] bg-repeat"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(250,150,80,0.3) 20%, transparent 20%), radial-gradient(circle at 70% 70%, rgba(250,200,80,0.3) 20%, transparent 20%)",
        }}
      ></div>

      {/* Conteúdo Principal */}
      <main className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12">
        {/* Coluna da Esquerda: Leitor de PDF */}
        <section className="w-full md:w-1/2 flex flex-col items-center">
          <div className="bg-white p-4 shadow-lg max-w-md w-full">
            <Document
              file="/meu-arquivo.pdf" // Certifique-se de que o PDF esteja disponível na pasta public
              onLoadSuccess={onDocumentLoadSuccess}
              loading="Carregando PDF..."
            >
              <Page pageNumber={pageNumber} scale={1.2} />
            </Document>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Página Anterior
            </button>
            <span className="text-sm">
              Página {pageNumber} de {numPages || "---"}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="px-3 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Próxima Página
            </button>
          </div>
        </section>

        {/* Coluna da Direita: Informações e Destaques */}
        <section className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl font-extrabold">
            Edu<span className="italic text-orange-600">CAÇÃO</span>
          </h1>
          <h2 className="text-xl font-semibold">Stephanie Matubara</h2>
          <div className="text-2xl">★★★★★</div>
          <blockquote className="p-4 border-l-4 border-orange-300 italic text-gray-700">
            “Quote exemplo para inspirar o leitor através da educação e conhecimento.”
          </blockquote>
          <blockquote className="p-4 border-l-4 border-orange-300 italic text-gray-700">
            “Outra frase que destaca a importância da educação em nossas vidas.”
          </blockquote>
        </section>
      </main>
          
      <Footer />
    </>
  );
}
