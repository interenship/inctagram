import React from "react";

type MenuProps = {
  children: React.ReactNode;
};

const Menu = (props: MenuProps) => {
  const { children } = props;
  return (
    <nav className="pl-[40px] flex flex-col justify-center items-start">
      {children}
    </nav>
  );
};

export default Menu;
