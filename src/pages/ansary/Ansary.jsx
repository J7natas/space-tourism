import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import './index.scss';
import fotoAnsary from '../../assets/crew/image-anousheh-ansari.png';
import Menu from "../../components/Menu/Menu";

const Ansary = () => {
  return (
    <section  className='Ansary'>
    <Header />
    <Menu />
    <div className='Ansary__Container'>
        <div className='Ansary__Area-Left'>
           <div className='Ansary__Titulo-principal'>
                <h2> <span>02</span> Meet your crew </h2>
           </div>
           <div className='Ansary__Area-Text'>
                <h3>Flight Engineer</h3>
                <h2>Anousheh Ansari</h2>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder 
                of Prodea Systems. Ansari was the fourth self-funded space tourist,
                the first self-funded woman to fly to the ISS, and the first Iranian
                in space.  </p>
           </div>
           <div className='Ansary__Bolinhas'>
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
        <div className='Ansary__Area-Right'>
            <img src={fotoAnsary} />
        </div>
    </div>
</section>
  )
}

export default Ansary