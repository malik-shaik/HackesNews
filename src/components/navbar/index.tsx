import { FC, useState } from "react";

import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { ToggleButton } from "./toggle";

export const Navbar: FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="navbar">
      <Logo />

      <NavLinks isMenuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <ToggleButton isMenuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};
