import React from "react";
import { Typography } from "@/shared/ui/Typography";

export type ScrollbarProps = {
  type?: "horizontal" | "vertical";
};

export const Scrollbar = (props: ScrollbarProps) => {
  const { type = "vertical" } = props;

  return (
    <>
      {type === "vertical" && (
        <div>
          <Typography.REGULAR16 className={"text-white mb-4"}>
            Vertical scroll
          </Typography.REGULAR16>
          <div
            className={
              "w-[800px] h-[200px] border border-dark-100 overflow-y-scroll box-border before:content-[''] before:block before:h-[1000px]"
            }
          ></div>
        </div>
      )}

      {type === "horizontal" && (
        <div>
          <Typography.REGULAR16 className={"text-white mb-4"}>
            Horizontal scroll
          </Typography.REGULAR16>
          <div
            className={
              "h-[200px] w-[800px] border border-dark-100 overflow-x-scroll box-border relative"
            }
          >
            <div className="w-[3000px] h-full"></div>
          </div>
        </div>
      )}
    </>
  );
};
