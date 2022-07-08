import { FC } from "react";
import { getImage, ImageType } from "../../../lib/getImage";
const { LOGO } = ImageType;

export const Logo: FC = () => {
  const logoUrl = getImage({ imageType: LOGO });
  return (
    <div className="navbar__logo">
      <img src={logoUrl} alt="logo" height={50} />
      <h3>Hackers News</h3>
    </div>
  );
};
