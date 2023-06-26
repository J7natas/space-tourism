
import Header from '../../components/header/Header';
import './index.scss';
import fotoDouglas from '../../assets/crew/image-douglas-hurley.png';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu/Menu';

const Crew = () => {
  return (
    <section  className='Crew'>
        <Header />
        <Menu />
        <div className='Crew__Container'>
            <div className='Crew__Area-Left'>
               <div className='Crew__Titulo-principal'>
                    <h2> <span>02</span> Meet your crew </h2>
               </div>
               <div className='Crew__Area-Text'>
                    <h3>Commander </h3>
                    <h2>Douglas Hurley</h2>
                    <p>Douglas Gerald Hurley is an American engineer, 
                    former Marine Corps pilot and former NASA astronaut. 
                    He launched into space for the third time as commander of 
                    Crew Dragon Demo-2.</p>
               </div>
               <div className='Crew__Bolinhas'>
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
            <div className='Crew__Area-Right'>
                <img src={fotoDouglas} />
            </div>
        </div>
    </section>
  )
}

export default Crew