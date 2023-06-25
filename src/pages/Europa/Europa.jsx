import './index.scss';
import imgEuropa from '../../assets/destination/image-europa.png';
import Header from '../../components/header/Header';
import MiniHeader from '../../components/minHeader/Mini';

function Europa() {
  return (
    <div className='bannerMars'>
    <Header />
    <section className='Europa'>
        <div className='Europa__Area-Left'>
            <h3> <span>01</span> Pick your destination </h3>
            <img src={imgEuropa} />
        </div>
        <div className='Europa__Area-Right'>
        <MiniHeader />
        <div className='Europa__Description'>
                <h1>EUROPA</h1>
                <p>The smallest of the four Galilean moons orbiting Jupiter,
                 Europa is a winter lover’s dream. With an icy surface, it’s 
                 perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.</p>
                <footer>
                    <div className='Europa__Distance'>
                        <p>AVG. DISTANCE</p>
                        <h5>628 MIL. km</h5>
                    </div>
                    <div className='Europa__Time'>
                        <p>Est. travel time</p>
                        <h5>3 years</h5>
                    </div>
                </footer>
        </div>
        </div>
    </section>
</div>
  )
}

export default Europa