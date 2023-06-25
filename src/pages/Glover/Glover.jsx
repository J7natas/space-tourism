import Header from "../../components/header/Header";
import fotoGlover from '../../assets/crew/image-victor-glover.png';
import './index.scss';
import { Link } from "react-router-dom";


const Glover = () => {
  return (
    <section  className='Glover'>
    <Header />
    <div className='Glover__Container'>
        <div className='Glover__Area-Left'>
           <div className='Glover__Titulo-principal'>
                <h2> <span>02</span> Meet your crew </h2>
           </div>
           <div className='Glover__Area-Text'>
                <h3>PILOT</h3>
                <h2>Victor Glover</h2>
                <p>Pilot on the first operational flight of the SpaceX Crew Dragon
                 to the International Space Station. Glover is a commander in the
                 U.S. Navy where he pilots an F/A-18.He was a crew member of
                 Expedition 64, and served as a station systems flight engineer. </p>
           </div>
           <div className='Glover__Bolinhas'>
            <Link to={'/crew'}>
             <p id='bolinha1'></p>
            </Link>
            <Link to={'/crew/mark'}>
                <p id='bolinha2'></p>
            </Link>
            <Link to={'/crew/glover'}>
                <p id='bolinha3'></p>
            </Link>
            <Link to={'/crew/ansary'}>
                 <p id='bolinha4'></p>
            </Link>
           </div>
        </div>
        <div className='Glover__Area-Right'>
            <img src={fotoGlover} />
        </div>
    </div>
</section>
  )
}

export default Glover;