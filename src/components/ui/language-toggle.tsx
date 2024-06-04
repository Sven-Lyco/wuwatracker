"use client";

import * as React from "react";
import { Languages } from "lucide-react";

import { LanguageCodeEnum, LanguageTranslationArray } from "@/types/LangaugeCode";
import { useLocalStorage } from "usehooks-ts";


const LOCALSTORAGE_KEY = "language";

export function LanguageToggle() {
  const [language, setLanguage] = useLocalStorage<LanguageCodeEnum>(LOCALSTORAGE_KEY, "en");

  return (
    <div>
      <select onChange={handleSelectChange}>
        {LanguageTranslationArray.map((lan: any) => (<>
            <option value={lan.key}>{lan.value}</option>
            </>
        ))}
        
      </select>
    </div>
  );

  function handleSelectChange(event: any) {
    setLanguage(event.target.value);
  }
}


