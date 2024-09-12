import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/Select";
import FlagUnitedKingdom from "../../../../public/icons/FlagUnitedKingdom";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";
import Link from "next/link";
import Bell from "../../../../public/icons/Bell";

const Header = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <header className="w-full height-[60px]">
      <div className="flex justify-between items-center px-[64px]">
        <Typography.LARGE>
          <span className="text-fontXXL text-light-100">Inctagram</span>
        </Typography.LARGE>
        <div className="flex  gap-9">
          {isLogged && <Bell fillColor="black" outlineColor="white" />}
          <Select>
            <SelectTrigger
              className="w-[163px] h-[36px] "
              IconComponent={FlagUnitedKingdom}
            >
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent className="w-[163px] text-[16px]">
              <SelectItem value="Select-box">English</SelectItem>
              <SelectItem value="dark">Russian</SelectItem>
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
      <div className="w-full h-[1px] bg-dark-300 mt-3.5">asd</div>
    </header>
  );
};

export default Header;
