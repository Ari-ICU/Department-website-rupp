import React from "react";
import { motion } from "framer-motion";
import contactImage from "../../assets/model/web-sample-1(3).jpg";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;


  return (
    <div className="my-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4"
      >
        <div className="">
          <div className="relative flex flex-col xl:flex-row items-center justify-center">
            {/* Image Section (Top on Small Screens, Right Side on Large Screens) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:max-w-[611px] xl:h-[663px] w-full h-auto flex justify-center items-center order-1 xl:order-2"
            >
              <img
                src={contactImage}
                alt="Contact Us"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Contact Form (Bottom on Small Screens, Left Side on Large Screens) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="xl:w-[836px] xl:h-[568px] w-full xl:p-6 p-4 bg-white shadow-md rounded-2xl xl:mr-[-100px] z-0 order-2 xl:order-1"
            >
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`text-3xl text-center font-normal mb-4  ${currentLanguage === 'km' ? "font-khmer" : "font-semibold"}`}
                  lang={currentLanguage}
                >
                  {t("Contact.Contact Us If You Have Any Questions")}
                </motion.h1>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700">
                        {t("Contact.First Name*")}
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-gray-700">
                        {t("Contact.Last Name*")}
                      </label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      {t("Contact.Email*")}
                    </label>
                    <input
                      type="email"
                      required
                      className="mt-1 block w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-700">
                      {t("Contact.Description")}
                    </label>
                    <textarea
                      rows="4"
                      className="mt-1 block w-full px-3 py-2 border bg-gray-300 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="flex"
                  >
                    <button
                      type="submit"
                      className="py-2 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {t("Contact.Submit")}
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;