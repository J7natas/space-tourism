import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import menu from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import './index.scss';

const Home = () => {
  let hamburger = document.querySelector("#menu");
  let img = document.querySelector('#image-menu');

  const handlerMenu = () => {
    if(hamburger.style.display == 'none'){
      hamburger.style.display = 'block';
      img.src = close;
    }else {
      hamburger.style.display = 'none';
      img.src = menu;
    }
   
  }


  return (
    <section className='Home'>
      <Header />
      <img onClick={handlerMenu} id='image-menu' src={menu} />
      <div id='menu' className='Home__Menu'>
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
      <div className='Home__container'>
        <div className='Home__areaText'>
          <p className='Home__Text-top'>SO, YOU WANT TO TRAVEL TO</p>
          <h3 className='Home__Text-destac'>SPACE</h3>
          <p className='Home__Paragrafo'>Let’s face it; if you want to go to space,
             you might as well genuinely go to outer space and not
            hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='Home__Button'>
          <Link to={'/destination/moon'}>
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home