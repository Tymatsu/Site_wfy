"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import girafa from "../../../../public/Girafa contact.PNG";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    description: "",
    joinNewsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.log("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="flex">
        <div className="w-1/2 bg-custom-bege1 rounded-tr-[96px] font-title font-semibold text-xl text-custom-laranja2 p-10 pl-36">
          <h2 className="text-3xl text-custom-amarelo1 p-6">{t("text0")}</h2>
          <p className="p-6">{t("text2")}</p>
          <Image
            className="w-[32rem] ml-40 "
            src={girafa}
            alt="Picture of the author"
          />
        </div>

        <div className="flex items-center justify-center w-1/2 font-manrope">
          <div className="bg-white rounded max-w-lg w-full">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  {t("text4")}
                  <span className="text-blue-500"> *</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t("text4")}
                  className="border border-custom-laranja2 mt-1 block w-full rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 pl-4"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  {t("text5")}
                  <span className="text-blue-500"> *</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t("text5")}
                  className="mt-1 block w-full border border-custom-laranja2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 pl-4"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  {t("text6")}
                  <span className="text-blue-500"> *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="mt-1 block w-full border border-custom-laranja2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 pl-4"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  {t("text7")}
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    const formattedValue = e.target.value.replace(/\D/g, '');
                    setFormData({ ...formData, phoneNumber: formattedValue });
                  }}
                  placeholder={t("text3")}
                  className="mt-1 block w-full border border-custom-laranja2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-12 pl-4"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 pl-2"
                >
                  {t("text8")}
                  <span className="text-blue-500"> *</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-custom-laranja2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pl-4"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="joinNewsletter"
                  name="joinNewsletter"
                  checked={formData.joinNewsletter}
                  onChange={handleChange}
                  className="h-4 w-4 text-custom-azul1 focus:ring-indigo-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="joinNewsletter"
                  className="ml-2 block text-sm text-gray-900"
                >
                  {t("text11")}<span className="text-blue-500"> *</span>
                </label>
              </div>
              <div className="flex justify-between">
                <span className="">
                  <span className="text-blue-500">* </span>
                  {t("text9")}
                </span>
                <div className="">
                  <button
                    type="submit"
                    className="font-semibold bg-custom-azul1 hover:bg-blue-700 hover:text-white text-white py-[13px] px-[28px] rounded-full"
                  >
                    {t("text10")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
