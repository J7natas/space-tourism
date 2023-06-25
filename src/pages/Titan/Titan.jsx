import Header from '../../components/header/Header';
import MiniHeader from '../../components/minHeader/Mini';
import imgTitan from '../../assets/destination/image-titan.png';
import './index.scss';

const Titan = () => {
  return (
    <div className='bannerMars'>
    <Header />
    <section className='Titan'>
        <div className='Titan__Area-Left'>
            <h3> <span>01</span> Pick your destination </h3>
            <img src={imgTitan} />
        </div>
        <div className='Titan__Area-Right'>
        <MiniHeader />
        <div className='Titan__Description'>
                <h1>TITAN</h1>
                <p>The only moon known to have a dense atmosphere other than Earth,
                 Titan is a home away from home (just a few hundred degrees colder!)
                 . As a bonus, you get striking views of the Rings of Saturn.</p>
                <footer>
                    <div className='Titan__Distance'>
                        <p>AVG. DISTANCE</p>
                        <h5>1.6 BIL. km</h5>
                    </div>
                    <div className='Titan__Time'>
                        <p>Est. travel time</p>
                        <h5>7 years</h5>
                    </div>
                </footer>
        </div>
        </div>
    </section>
</div>
  )
}

export default Titan