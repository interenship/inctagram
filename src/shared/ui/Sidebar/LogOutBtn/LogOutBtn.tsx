import React from "react";

import { LogOutOutline } from "@/shared/assets/icons/components";
import { Button } from "@/shared/ui/Button";
import { Typography } from "@/shared/ui/Typography";

type LogOutProps = {
  logOutFn: () => void;
};

const LogOutBtn = (props: LogOutProps) => {
  const { logOutFn } = props;
  return (
    <Button
      variant="text"
      className="group mb-[180px] flex cursor-pointer gap-3 rounded text-light-100 focus:outline-none focus:ring-2 focus:ring-accent-500"
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
