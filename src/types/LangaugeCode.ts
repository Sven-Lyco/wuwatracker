import { z } from "zod";

export const LanguageCode = {
  en: "en",
  de: "de",
  jp: "jp",
  cn: "cn",
  kr: "kr",
  pt: "pt",
  ru: "ru",
  id: "id",
  vi: "vi",
  th: "th",
  es: "es",
  fr: "fr"
} as const;

// TODO: Site will always use "en" temporarily to prevent site crashes, more flexible language support is needed
export const LanguageCodeEnumSchema = z.preprocess(
  (_) => LanguageCode.en,
  z.nativeEnum(LanguageCode).default(LanguageCode.en),
);
export type LanguageCodeEnum = z.infer<typeof LanguageCodeEnumSchema>;



export const LanguageTranslations = {
  en: "English",
  de: "Deutsch",
  jp: "日本語",
  cn: "简体中文",
  kr: "한국어",
  pt: "Português",
  ru: "Pусский язык",
  id: "Bahasa Indonesia",
  vi: "Tiếng Việt",
  th: "ภาษาไทย",
  es: "Español",
  fr: "Français"
} as const;

export const LanguageTranslationArray = Object.entries(LanguageTranslations).map(([key, value]) => ({ key, value }));