import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { Langugages } from "../Languages";
import { useRouter } from "next/router";

export const NavbarLangButton = () => {
  const { t } = useTranslation();
  const navigate = useRouter();

  return (
    <div className="flex items-center gap-7">
      <Langugages />
      <Button
        className="px-6 py-2 rounded-3xl bg-mainRed text-white font-medium shadow-md hover:scale-95 transition-all duration-500 hidden sm:block"
        innerText={t("signUp")}
        onClick={() => navigate.push("/login")}
      />
    </div>
  );
};
