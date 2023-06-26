
import Header from '../../components/header/Header';
import foguete from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import './index.scss';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

const Technology = () => {
  return (
   <section className='Technology'>
        <Header />
        <Menu />
        <div className='Technology__Container'>
            <div className='Technology__Area-Left'>
                <div className='Technology__Title-page'>
                    <h2> <span>03</span> SPACE LAUNCH 101 </h2>
                </div>
                <div className='Technology__Sidebar'>
                    <div className='Technology__Navegation'>
                        <Link to={'/technology'}>
                            <p id='navigation1'>1</p>
                        </Link>
                        <Link to={'/technology/spaceport'}>
                            <p id='navigation2'>2</p>
                        </Link>
                        <Link to={'/technology/spacecapsule'}>
                            <p id='navigation3'>3</p>
                        </Link>
                    </div>
                    <div className='Technology__Information'>
                        <h3>THE TERMINOLOGY…</h3>
                        <h2>LAUNCH VEHICLE</h2>
                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle
                         used to carry a payload from Earth's surface to space,
                         usually to Earth orbit or beyond. Our WEB-X carrier
                         rocket is the most powerful in operation. Standing 150
                         metres tall, it's quite an awe-inspiring sight on the
                         launch pad!</p>
                    </div>
                </div>
            </div>
            <div className='Technology__Area-right'>
                <img src={foguete} />
            </div>
        </div>
   </section>
  )
}

export default Technology