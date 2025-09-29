"use client";
import { useState } from "react";
import OneSkill from "../utilitiesComponents/OneSkill";
import { useI18n } from "@/locales/client";

const SkillsPage = () => {
  const t = useI18n();
  const skills = [
    {
      label:  t("APIPerformanceTesting") ,
      value: [
        { name: "Postman", img: "/Postman.png" },
        { name: "Apidog", img: "/Apidog.png" },
        { name: "Swagger", img: "/Swagger.png" },
        { name: "JMeter", img: "/JMeter.png" },
      ],
    },
    {
      label: t("ProgrammingAutomation") ,
      value: [
        { name: "Java", img: "/java.png" },
        { name: "Selenium WebDriver", img: "/se.png" },
        { name: "TestNG", img: "/testNG.png" },
        { name: "Cucumber", img: "/Cucumber.png" },
        { name: "Appium", img: "/Appium.png" },
      ],
    },
    {
      label: t("ProjectDefectTrackingTools") ,
      value: [
        { name: "Jira", img: "/Jira.png" },
        { name: "Azure DevOps", img: "/AzureDevOps.png" },
        { name: "Trello", img: "/Trello.png" },
        { name: "Git & GitHub", img: "/Git.png" },
      ],
    },
    {
      label: t("DatabasesAndConcepts") ,
      value: [
        { name: "SQL", img: "/SQL.png" },
        { name: "OOP", img: "/OOP.png" },
        { name: "SDLC / STLC", img: "/SDLC.png" },
      ],
    },
  ];

  // state for selected category
  const [selected, setSelected] = useState(skills[0].label);
  const [data, setData] = useState(skills[0].value);

  const handleSelect = (ele) => {
    setSelected(ele.label);
    setData(ele.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-[20px] pt-[25px] flex-wrap">
        {skills.map((ele) => (
          <button
            key={ele.label}
            onClick={() => handleSelect(ele)}
            className={`text-[14px] md:text-[16px] font-medium p-[10px] px-[15px] border rounded-[12px] transition duration-300
              ${
                selected === ele.label
                  ? "bg-[#333333c4] text-[#ffffffc5] border-[#ffffffa5]"
                  : "text-[#ffffffac] border-[#333]  hover:text-white"
              }`}
          >
            {ele.label}
          </button>
        ))}
      </div>

      <div
        id="skills"
        className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-[25px] mt-10"
      >
        {data.map((ele) => (
          <OneSkill key={ele.name} name={ele.name} img={ele.img} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
