import { Link } from 'react-router-dom';
import fotoMark from '../../assets/crew/image-mark-shuttleworth.png';
import Header from '../../components/header/Header';
import './index.scss';

const Mark = () => {
  return (
    <section  className='Mark'>
    <Header />
    <div className='Mark__Container'>
        <div className='Mark__Area-Left'>
           <div className='Mark__Titulo-principal'>
                <h2> <span>02</span> Meet your crew </h2>
           </div>
           <div className='Mark__Area-Text'>
                <h3>Mission Specialist </h3>
                <h2>MARK SHUTTLEWORTH</h2>
                <p>Mark Richard Shuttleworth is the founder and CEO of Canonical,
                 the company behind the Linux-based Ubuntu operating system. 
                 Shuttleworth became the first South African to travel to space
                  as a space tourist.</p>
           </div>
           <div className='Mark__Bolinhas'>
            <Link to={'/crew'}>
             <p id='bolinha1'></p>
            </Link>
            <Link to={'/crew/mark'}>
                <p id='bolinha2'></p>
            </Link>
            <Link to={'/crew/glove'}>
                <p id='bolinha3'></p>
            </Link>
            <Link to={'/crew/ansary'}>
                 <p id='bolinha4'></p>
            </Link>
           </div>
        </div>
        <div className='Mark__Area-Right'>
            <img src={fotoMark} />
        </div>
    </div>
</section>
  )
}

export default Mark