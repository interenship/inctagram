import { useRouter } from "next/router";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { cn } from "@/features/utils/cn";
import { Typography } from "@/shared/ui/Typography";
import React from "react";
import { MenuItemProps } from "@/shared/ui/Sidebar/types";

export const MenuItem = (props: MenuItemProps) => {
  const {
    href,
    label,
    icon: Icon,
    filledIcon: FilledIcon,
    disabled,
    className,
  } = props;
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Button
      asChild
      variant="text"
      className={cn("text-light-100 mb-[10px]", className)}
    >
      <Link
        key={href}
        href={disabled ? "#" : href}
        className={cn(
          "flex gap-3 group focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:outline-none rounded",
          {
            "cursor-not-allowed pointer-events-none": disabled,
          },
        )}
      >
        {isActive && FilledIcon ? (
          <FilledIcon
            className={cn(
              "transition-colors w-6 h-6 text-light-100 duration-200 ease-in-out",
              {
                "group-hover:text-accent-500 text-accent-500": isActive,
                "text-dark-100": disabled,
              },
            )}
          />
        ) : (
          <Icon
            className={cn(
              "transition-colors text-light-100 w-6 h-6 group-hover:text-accent-100 duration-200 ease-in-out",
              {
                "text-accent-500": isActive,
                "text-dark-100": disabled,
              },
            )}
          />
        )}
        <Typography.MEDIUM14
          className={cn(
            "transition-colors duration-200 ease-in-out group-hover:text-accent-100",
            {
              "group-hover:text-accent-500 text-accent-500 font-bold": isActive,
              "text-dark-100": disabled,
            },
          )}
        >
          {label}
        </Typography.MEDIUM14>
      </Link>
    </Button>
  );
};
