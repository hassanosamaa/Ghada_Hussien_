import { Github, Linkedin } from "lucide-react";
import WhatsappIcon from "./icons/WhatsappIcon";
import { useI18n } from "@/locales/client";
const Footer = () => {
  const t= useI18n();
  return (
    <div
      className="
         mx-auto p-4
        flex flex-col md:flex-row
        justify-center
        md:gap-[15%] 
        gap-[10px] items-center
        text-gray-100
        mt-8
        md:h-[15vh]
        border-t border-zinc-800 
        "
    >
      <div
        className="text-gray-400 text-center p-4
            w-full 
            md:w-[40%]"
      >
        {t('title')}
      </div>
      <div
        className="flex 
                justify-center
                gap-[15px]
                items-center w-full 
                md:w-[30%]
                
                "
      >
        <a href="https://linkedin.com/in/ghada-hussien-qa">
          <i className=" text-[25px] md:text-[30px]   transition duration-300">
            <Linkedin color="#0077b5" />
          </i>
        </a>

        <a href="https://github.com/GhadaHussienQA">
          <i className=" text-[25px] md:text-[30px]  transition duration-300">
            <Github color="#ffff" />
          </i>
        </a>

        <a href="https://wa.me/+201098940399">
          <i className="   text-[25px] md:text-[30px]  transition duration-300">
            <WhatsappIcon />
          </i>
        </a>
      </div>
    </div>
  );
};
export default Footer;
