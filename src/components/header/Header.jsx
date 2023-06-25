import './index.scss';
import logo from '../../assets/shared/logo.svg';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='Header'>
         <div className='Header__logo'>
            <img src={logo} />
            <p></p>
        </div>
        <header>
            <div id='activeHome' className='Header__areas'>
              <h5>00</h5>
              <Link to={'/'}>
                <p>HOME</p>
              </Link>
            </div>
            <div id='activeDestination' className='Header__areas'>
                <h5>01</h5>
                <Link to={'/destination/moon'}>
                  <p>DESTINATION</p>
                </Link>
            </div>
            <div id='activeCrew' className='Header__areas'>
                <h5>02</h5>
                <Link to={'/crew'}>
                  <p>CREW</p>
                </Link>
            </div>
            <div className='Header__areas'>
                <h5>03</h5>
                <Link to={'/technology'}>
                  <p>TECHNOLOGY</p>
                </Link>
            </div>
        </header>
    </div>
    
  )
}

export default Header