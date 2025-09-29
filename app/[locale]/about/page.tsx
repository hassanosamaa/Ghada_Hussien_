"use client";
import React, { useRef } from "react";
import HomePage from "../../components/routerComponents/Home";
import ContactPage from "../../components/routerComponents/Contact";
import SkillsPage from "../../components/routerComponents/Skills";
import Title from "../../components/utilitiesComponents/Title";
import { Navigation } from "../../components/nav";
import  Footer  from "../../components/Footer";
import Particles from "../../components/particles";
import { useI18n } from "@/locales/client";

const Page = () => {
  const t = useI18n();
  return (
    <div>
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <HomePage />
      <Title title={t("MY_SKILLS")} />
      <SkillsPage />
      {/* <Title title={t("CONTACT")} /> */}
      {/* <ContactPage /> */}
      <Footer />
    </div>
  );
};

export default Page;
