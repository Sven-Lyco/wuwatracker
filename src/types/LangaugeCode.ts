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
export type LangaugeCodeEnum = z.infer<typeof LanguageCodeEnumSchema>;
