"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "1") {
      router.push("/en");
    } else if (value === "2") {
      router.push("vi");
    }
  };
  return (
    <>
      <select onChange={handleChange}>
        <option value="1">English</option>
        <option value="2">Vietnamese</option>
      </select>
      <h1>{t("title")}</h1>
    </>
  );
}
