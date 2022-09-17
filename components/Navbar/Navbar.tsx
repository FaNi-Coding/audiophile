import { StyledNav } from './NavbarStyles'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import Image from 'next/image'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <StyledNav className='flex'>
      <nav className="container flex align-center justify-around">
        <div className='menu'>
          <Image src="/assets/shared/tablet/icon-hamburger.svg" alt="hamburger-icon" width={16}
          height={15}
          />
        </div>
        <div className='cart'>
          <Image src='/assets/shared/desktop/icon-cart.svg' alt='cart-icon' width={23}
          height={20}/>
        </div>
      </nav>
    </StyledNav>
  )
}

export default Navbar