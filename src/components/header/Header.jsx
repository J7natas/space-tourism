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
            <div id='action' className='Header__areas'>
                <h5>00</h5>
                <p>HOME</p>
            </div>
            <div className='Header__areas'>
                <h5>01</h5>
                <Link to={'/destination'}>
                  <p>DESTINATION</p>
                </Link>
            </div>
            <div className='Header__areas'>
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