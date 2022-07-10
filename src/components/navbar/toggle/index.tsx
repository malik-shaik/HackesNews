import { FC } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiMenuAltRight } from 'react-icons/bi'

export interface ToggleButtonProps {
  isMenuOpen: boolean
  setMenuOpen: (value: React.SetStateAction<boolean>) => void
}

export const ToggleButton: FC<ToggleButtonProps> = ({
  isMenuOpen,
  setMenuOpen,
}) => {
  const menuToggleHandler = () => setMenuOpen(!isMenuOpen)

  return (
    <div className="navbar__toggle">
      {!isMenuOpen ? (
        <BiMenuAltRight onClick={menuToggleHandler} />
      ) : (
        <AiOutlineClose onClick={menuToggleHandler} />
      )}
    </div>
  )
}
