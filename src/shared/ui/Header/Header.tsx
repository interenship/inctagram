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
import Bell from "../../../../public/icons/Bell";

type Language = "English" | "Russian";

export const Header = ({ isLogged }: { isLogged: boolean }) => {
  const [language, setLanguage] = useState<Language>("English");

  let notificationsNr = 3;

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  const renderFlag = () => {
    switch (language) {
      case "Russian":
        return <RussianFlag />;
      case "English":
      default:
        return <FlagUnitedKingdom />;
    }
  };

  return (
    <>
      <header className="w-full h-[60px] bg-dark-700 flex flex-col justify-center">
        <div className="flex justify-between items-center px-[64px]">
          <Typography.LARGE>
            <span className="text-light-100">Inctagram</span>
          </Typography.LARGE>
          <div className="flex  gap-9">
            {isLogged && (
              <span className="relative mr-[10px] flex items-center cursor-pointer">
                <Bell fillColor="black" outlineColor="white" />
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
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Russian">Russian</SelectItem>
              </SelectContent>
            </Select>
            {!isLogged && (
              <div className="flex items-center gap-6">
                <Button
                  className="cursor-pointer"
                  variant={"text"}
                  asChild={true}
                >
                  <Link href={"/login"} className="text-[16px]">
                    Log in
                  </Link>
                </Button>
                <Button
                  variant={"primary"}
                  className="width-[100px] height-[36px] cursor-pointer"
                  asChild={true}
                >
                  <Link href={"/signUp"}>Sign up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>
      <div className="w-full h-[1px] bg-dark-300 "></div>
    </>
  );
};
