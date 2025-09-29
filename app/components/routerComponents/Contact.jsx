"use client";

import Lottie from "lottie-react";
import contact from "@/lottie/contact.json";
import { useState } from "react";
import { useI18n } from "@/locales/client";

const ContactPage = () => {
  const t = useI18n();
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <div
      id="contact"
      className="
        container mx-auto p-5  md:h-[70vh]
        flex flex-col 
        gap-[15px]
        md:gap-[10%]
        md:px-32
        md:flex-row justify-center
        items-center"
    >
      <div
        className=" p-4 md:p-0
            w-full md:w-[40%]"
      >
        <Lottie animationData={contact} loop={true} />
      </div>

      <div
        className="
            w-full md:w-[60%] 
            flex flex-col 
            gap-[15px]
            justify-center items-start
            "
      >
        <label
          className="text-gray-300
               "
        >
          {t("YourMessage")}
        </label>
        <textarea
          className="w-full 
                 outline-none rounded-lg bg-zinc-900/85
                 px-2 py-[4px] placeholder:text-gray-500
                 
                 text-gray-200 text-[15px]
                 border border-zinc-600
                 focus:border focus:border-zinc-500
               

                md:w-[80%]"
          placeholder={t("Write")}
          rows={6}
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
        <button
          className=" 
                py-[8px] mt-4 rounded-[5px] text-white px-[15px] border border-zinc-600 cursor-pointer  opacity-100 hover:opacity-70  transition duration-300"
        >
          <a
            href={`mailto:${"ghada.muhussien@gmail.com"}?subject=${"from protofolio"}&body=${message}`}
          >
            {t("ClickToSendAnEmail")}
          </a>
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
