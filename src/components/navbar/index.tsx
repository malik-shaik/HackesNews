import { FC, useState } from "react";

import { Logo } from "components/navbar/logo";
import { NavLinks } from "components/navbar/nav-links";
import { ToggleButton } from "components/navbar/toggle";

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
