import { FC, useEffect, useState } from 'react'
import { ToggleButtonProps } from 'components/navbar/toggle'
import { Link } from 'react-router-dom'

type WindowSize = {
  width: number
  height: number
}

type NavLinksProps = ToggleButtonProps

export const NavLinks: FC<NavLinksProps> = ({ isMenuOpen, setMenuOpen }) => {
  const [size, setSize] = useState<WindowSize>({
    height: 0,
    width: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && isMenuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, isMenuOpen])

  const isMenuClass = isMenuOpen && size.width < 768 ? 'isMenu' : ''

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar__nav ${isMenuClass}`}>
      <ul>
        <Link className="navbar__nav__link" onClick={handleNavLinkClick} to="/">
          Home
        </Link>
        <Link
          className="navbar__nav__link"
          onClick={handleNavLinkClick}
          to="contact"
        >
          Contact us
        </Link>
      </ul>
    </nav>
  )
}
