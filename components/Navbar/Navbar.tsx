import { StyledNav } from './NavbarStyles'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Image from 'next/image'
import LinkItems from './LinkItems'

type Props = {}

const Navbar = (props: Props) => {
  const navLinks = [
    {
      name: 'headphones',
      href: 'headphones',
      img: '/assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      name: 'speakers',
      href: 'speakers',
      img: '/assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      name: 'earphones',
      href: 'earphones',
      img: '/assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  ]

  return (
    <StyledNav>
      <nav className='container nav-wrapper'>
        <div className='menu'>
          <Image
            src='/assets/shared/tablet/icon-hamburger.svg'
            alt='hamburger'
            width={16}
            height={15}
          />
        </div>

        <div className='logo'>
          <Image
            src='/assets/shared/desktop/logo.svg'
            alt='logo'
            width={143}
            height={25}
          />
        </div>

        <div className='links'>
          <ul>
            <LinkItems array={navLinks} />
          </ul>
        </div>

        <div className='cart'>
          <Image
            src='/assets/shared/desktop/icon-cart.svg'
            alt='cart'
            width={23}
            height={20}
          />
        </div>
      </nav>

      <div className='mobile-menu'>
        <ul>
          <LinkItems array={navLinks} menuItems />
        </ul>
      </div>
    </StyledNav>
  )
}

export default Navbar
