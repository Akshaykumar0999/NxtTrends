import {FaMoon} from 'react-icons/fa'
import {BiMenu} from 'react-icons/bi'
import {FiLogOut} from 'react-icons/fi'
import {
  NavContainer,
  //   Profile,
  WebsiteLogo,
  HeadersIcons,
} from './styledComponents'
import './index.css'

const Header = () => (
  <NavContainer>
    <WebsiteLogo
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
      alt="website logo"
    />
    <HeadersIcons>
      <FaMoon className="react-icons" />
      <BiMenu className="react-icons" />
      <FiLogOut className="react-icons" />
      {/* <FiLogOut
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      /> */}
    </HeadersIcons>
  </NavContainer>
)

export default Header
