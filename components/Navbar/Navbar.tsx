import { StyledNav } from './NavbarStyles'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <StyledNav className='flex'>
      <nav className="container flex align-center justify-between">
        <div className='menu'>
          <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="hamburger" width={16}
          height={15}
          />
        </div>
        <div className='logo'>
          <Image src="/assets/shared/desktop/logo.svg" alt="logo" width={143}
          height={25}
          />
        </div>
        <div className='cart'>
          <Image src='/assets/shared/desktop/icon-cart.svg' alt='cart' width={23}
          height={20}/>
        </div>
      </nav>
    </StyledNav>
  )
}

export default Navbar