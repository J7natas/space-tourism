import { Link } from "react-router-dom";
import Header from "../../../components/header/Header";
import capsule from '../../../assets/technology/image-space-capsule-portrait.jpg';
import './index.scss';

const Capsule = () => {
  return (
    <section className='Capsule'>
    <Header />
    <div className='Capsule__Container'>
        <div className='Capsule__Area-Left'>
            <div className='Capsule__Title-page'>
                <h2> <span>03</span> SPACE LAUNCH 101 </h2>
            </div>
            <div className='Capsule__Sidebar'>
                <div className='Capsule__Navegation'>
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
                <div className='Capsule__Information'>
                    <h3>THE TERMINOLOGY…</h3>
                    <h2>SPACE CAPSULE</h2>
                    <p>A space capsule is an often-crewed spacecraft that uses a 
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time 
                    during the flight. It includes a space gym, cinema, and 
                    plenty of other activities to keep you entertained.</p>
                </div>
            </div>
        </div>
        <div className='Capsule__Area-right'>
            <img src={capsule} />
        </div>
    </div>
</section>
  )
}

export default Capsule