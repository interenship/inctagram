import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import FlagUnitedKingdom from "@/shared/assets/icons/components/FlagUnitedKingdom";
import RussianFlag from "@/shared/assets/icons/components/FlagRussia";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import Bell from "@/shared/assets/icons/components/Bell";
import { cn } from "@/features/utils/cn";

type Language = "English" | "Russian";

type HeaderProps = {
  isLogged: boolean;
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { isLogged, className } = props;
  const [language, setLanguage] = useState<Language>("English");

  const languageOptions = {
    English: "English",
    Russian: "Russian",
  };

  let notificationsNr = 3;

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  const flagComponents = {
    Russian: <RussianFlag />,
    English: <FlagUnitedKingdom />,
  };

  const renderFlag = () => {
    return flagComponents[language] || <FlagUnitedKingdom />;
  };

  return (
    <>
      <header
        className={cn(
          "w-full h-[60px] bg-dark-700 flex justify-between items-center px-[64px] ",
          className,
        )}
      >
        <Typography.LARGE>
          <span className="text-light-100">Inctagram</span>
        </Typography.LARGE>
        <div className="flex gap-9">
          {isLogged && (
            <span className="relative mr-[10px] flex items-center cursor-pointer">
              <Bell />
              <div className="h-[13px] w-[13px] bg-danger-500 rounded-[50%] flex items-center justify-center absolute top-[6px] right-[1px]">
                <span className="text-light-100 text-[10px]">
                  {notificationsNr}
                </span>
              </div>
            </span>
          )}
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger
              className="w-[163px] h-[36px] "
              IconComponent={renderFlag}
            >
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="w-[163px] text-[16px]">
              <SelectItem value={languageOptions.English}>English</SelectItem>
              <SelectItem value={languageOptions.Russian}>Russian</SelectItem>
            </SelectContent>
          </Select>
          {!isLogged && (
            <div className="flex items-center gap-6">
              <Button
                className="cursor-pointer"
                variant={"text"}
                asChild={true}
              >
                <Link href={"/login"}>
                  <Typography.REGULAR16>Log in</Typography.REGULAR16>
                </Link>
              </Button>
              <Button
                variant={"primary"}
                className="width-[100px] height-[36px] cursor-pointer"
                asChild={true}
              >
                <Link href={"/signUp"}>
                  <Typography.REGULAR16>Sign up</Typography.REGULAR16>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </header>
      <div className="w-full h-[1px] bg-dark-300 "></div>
    </>
  );
};
