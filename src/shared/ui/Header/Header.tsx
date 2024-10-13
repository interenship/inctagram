import Link from "next/link";
import React, { useState } from "react";

import { cn } from "@/features/utils/cn";
import Bell from "@/shared/assets/icons/components/Bell";
import RussianFlag from "@/shared/assets/icons/components/FlagRussia";
import FlagUnitedKingdom from "@/shared/assets/icons/components/FlagUnitedKingdom";
import { Button } from "@/shared/ui/Button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/Select";
import { Typography } from "@/shared/ui/Typography";

type HeaderProps = {
  isLogged: boolean;
  className?: string;
};

export const Header = ({ isLogged, className }: HeaderProps) => {
  enum Language {
    English = "English",
    Russian = "Russian",
  }

  const [language, setLanguage] = useState<Language>(Language.English);

  const notificationsNr = 3;

  const handleLanguageChange = (value: Language) => {
    setLanguage(value);
  };

  const renderFlag = () => {
    return language === Language.English ? <FlagUnitedKingdom /> : <RussianFlag />;
  };

  return (
    <header className="flex flex-col w-full">
      <div className={cn("flex justify-between items-center h-[60px] px-[64px]", className)}>
        <Typography.LARGE className="cursor-pointer">Inctagram</Typography.LARGE>
        <div className="flex gap-9">
          {isLogged && (
            <span className="relative mr-[10px] flex cursor-pointer items-center">
              <Bell />
              <div className="absolute right-px top-[6px] flex size-[13px] items-center justify-center rounded-[50%] bg-danger-500">
                <span className="text-[10px] text-light-100">{notificationsNr}</span>
              </div>
            </span>
          )}
          <Select onValueChange={handleLanguageChange}>
            <SelectTrigger className="h-[36px] w-[163px] " IconComponent={renderFlag}>
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="w-[163px] text-[16px]">
              <SelectItem value={Language.English}>English</SelectItem>
              <SelectItem value={Language.Russian}>Russian</SelectItem>
            </SelectContent>
          </Select>
          {!isLogged && (
            <div className="flex items-center gap-6">
              <Button className="cursor-pointer" variant="text" asChild>
                <Link href="/login">
                  <Typography.REGULAR16>Log in</Typography.REGULAR16>
                </Link>
              </Button>
              <Button
                variant="primary"
                className="width-[100px] height-[36px] cursor-pointer"
                asChild
              >
                <Link href="/signUp">
                  <Typography.REGULAR16>Sign up</Typography.REGULAR16>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="h-px w-full bg-dark-300" />
    </header>
  );
};
