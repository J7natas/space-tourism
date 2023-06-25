import './index.scss';
import imageMars from '../../assets/destination/image-mars.png';
import Mini from '../../components/minHeader/Mini';
import Header from '../../components/header/Header';

const Mars = () => {
  return (
    <div className='bannerMars'>
        <Header />
        <section className='Mars'>
            <div className='Mars__Area-Left'>
                <h3> <span>01</span> Pick your destination </h3>
                <img src={imageMars} />
            </div>
            <div className='Mars__Area-Right'>
            <Mini />
            <div className='Mars__Description'>
                    <h1>MARS</h1>
                    <p>Don’t forget to pack your hiking boots. You’ll need them to
                    tackle Olympus Mons, the tallest planetary mountain in
                    our solar system. It’s two and a half times the size of
                     Everest!</p>
                    <footer>
                        <div className='Mars__Distance'>
                            <p>AVG. DISTANCE</p>
                            <h5>225 MIL. km</h5>
                        </div>
                        <div className='Mars__Time'>
                            <p>Est. travel time</p>
                            <h5>9 months</h5>
                        </div>
                    </footer>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Mars;