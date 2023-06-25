import Header from '../../../components/header/Header';
import { Link } from 'react-router-dom';
import './index.scss';
import port from '../../../assets/technology/image-spaceport-portrait.jpg';

const SpacePort = () => {
  return (
    <section className='Port'>
    <Header />
    <div className='Port__Container'>
        <div className='Port__Area-Left'>
            <div className='Port__Title-page'>
                <h2> <span>03</span> SPACE LAUNCH 101 </h2>
            </div>
            <div className='Port__Sidebar'>
                <div className='Port__Navegation'>
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
                <div className='Port__Information'>
                    <h3>THE TERMINOLOGY…</h3>
                    <h2>SPACEPORT</h2>
                    <p>A spaceport or cosmodrome is a site for launching 
                    (or receiving) spacecraft, by analogy to the seaport for 
                    ships or airport for aircraft. Based in the famous Cape 
                    Canaveral, our spaceport is ideally situated to take 
                    advantage of the Earth’s rotation for launch.</p>
                </div>
            </div>
        </div>
        <div className='Port__Area-right'>
            <img src={port} />
        </div>
    </div>
</section>
  )
}

export default SpacePort