import React from "react";
import { LogOutOutline } from "@/shared/assets/icons/components";
import { Typography } from "@/shared/ui/Typography";
import { Button } from "@/shared/ui/Button";

type LogOutProps = {
  logOutFn: () => void;
};

const LogOutBtn = (props: LogOutProps) => {
  const { logOutFn } = props;
  return (
    <Button
      variant="text"
      className="text-light-100 cursor-pointer flex gap-3 group mb-[180px] focus:ring-2 focus:ring-accent-500 focus:outline-none rounded"
      onClick={logOutFn}
    >
      <LogOutOutline className="text-light-100 group-hover:text-accent-100 group-active:text-accent-500" />
      <Typography.MEDIUM14 className="group-hover:text-accent-100 group-active:text-accent-500">
        Log out
      </Typography.MEDIUM14>
    </Button>
  );
};

export default LogOutBtn;
