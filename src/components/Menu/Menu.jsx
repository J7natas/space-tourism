import menu from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import './index.scss';

import { Link } from 'react-router-dom';

function Menu() {

    const handlerMenu = () => {
      let hamburger = document.getElementById("menu");
      let img = document.getElementById('image-menu');
      
        if(hamburger.style.display == 'none'){
          hamburger.style.display = 'block';
          img.src = close;
        }else {
          hamburger.style.display = 'none';
          img.src = menu;
        }
       
      }
  return (
    <div className='Menu'>
        <img onClick={handlerMenu} id='image-menu' src={menu} />
        <div id='menu' className='Menu__Menu'>
            <Link to={'/'}>
            <h5> <span>00</span> Home</h5>
            </Link>
            <Link to={'/destination/moon'}>
            <h5> <span>01</span> Destination</h5>
            </Link>
            <Link to={'/crew'}>
            <h5> <span>02</span> Crew</h5>
            </Link>
            <Link to={'/technology'}>
            <h5> <span>03 </span>Technology</h5>
            </Link>
        </div>
    </div>
  )
}

export default Menu