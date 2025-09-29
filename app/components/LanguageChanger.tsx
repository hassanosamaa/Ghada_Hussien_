"use client";
import { FC, useEffect, useState, useRef } from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import { useRouter } from "next/navigation";
import { LanguageIcon } from "./icons/LanguageIcon";

interface IProps {}

const LanguageChanger: FC<IProps> = () => {
  const currentLocale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("lang", currentLocale || "en");
    router.refresh();
  }, [currentLocale]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Change language"
        className="p-2 rounded-full hover:bg-gray-700 transition"
      >
        <LanguageIcon className="w-6 h-6 fill-white" />
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded-lg shadow-lg z-50"
        >
          <button
            onClick={() => {
              changeLocale("en");
              setOpen(false);
            }}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${
              currentLocale === "en" ? "font-bold" : ""
            }`}
          >
            English
          </button>
          <button
            onClick={() => {
              changeLocale("fr");
              setOpen(false);
            }}
            className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${
              currentLocale === "fr" ? "font-bold" : ""
            }`}
          >
            Français
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageChanger;
