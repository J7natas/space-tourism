import './index.scss';
import logo from '../../assets/shared/logo.svg';

function Header() {
  return (
    <div className='Header'>
         <div className='Header__logo'>
            <img src={logo} />
            <p></p>
        </div>
        <header>
            <div className='Header__areas'>
                <h5>00</h5>
                <p>HOME</p>
            </div>
            <div className='Header__areas'>
                <h5>01</h5>
                <p>DESTINATION</p>
            </div>
            <div className='Header__areas'>
                <h5>02</h5>
                <p>CREW</p>
            </div>
            <div className='Header__areas'>
                <h5>03</h5>
                <p>TECHNOLOGY</p>
            </div>
        </header>
    </div>
    
  )
}

export default Header