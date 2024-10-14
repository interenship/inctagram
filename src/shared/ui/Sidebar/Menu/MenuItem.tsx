import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { cn } from "@/features/utils/cn";
import { Button } from "@/shared/ui/Button";
import type { MenuItemProps } from "@/shared/ui/Sidebar/types";
import { Typography } from "@/shared/ui/Typography";

export const MenuItem = (props: MenuItemProps) => {
  const { href, title, icon: Icon, filledIcon: FilledIcon, disabled, className } = props;

  const router = useRouter();
  const isActive = router.pathname === href;

  const RenderIcon = isActive && FilledIcon ? FilledIcon : Icon;

  return (
    <Button
      asChild
      variant="text"
      className={cn("group mb-[10px] text-light-100", className)}
      disabled={disabled}
    >
      <Link
        key={href}
        href={href}
        className={cn(
          "flex gap-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500",
          {
            "cursor-not-allowed pointer-events-none": disabled,
          }
        )}
        style={{ outline: "none" }}
      >
        <RenderIcon
          className={cn(
            "size-6 text-light-100 transition-colors duration-200 ease-in-out group-hover:text-accent-100",
            {
              "group-hover:text-accent-500 text-accent-500": isActive,
              "text-dark-100": disabled,
            }
          )}
        />
        <Typography.MEDIUM14
          className={cn("transition-colors duration-200 ease-in-out group-hover:text-accent-100", {
            "group-hover:text-accent-500 text-accent-500 font-bold": isActive,
            "text-dark-100": disabled,
          })}
        >
          {title}
        </Typography.MEDIUM14>
      </Link>
    </Button>
  );
};
