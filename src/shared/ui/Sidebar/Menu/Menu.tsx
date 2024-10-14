import React from "react";

type MenuProps = {
  children: React.ReactNode;
};

const Menu = (props: MenuProps) => {
  const { children } = props;
  return <nav className="flex flex-col items-start justify-center pl-[40px]">{children}</nav>;
};

export default Menu;
