
import './index.scss';
import imageMoon from '../../assets/destination/image-moon.png';
import MiniHeader from '../../components/minHeader/Mini'

function Moon() {
  return (
    <section className='Moon'>
        <div className='Moon__Area-Left'>
            <h3> <span>01</span> Pick your destination </h3>
            <img src={imageMoon} />
        </div>
        <div className='Moon__Area-Right'>
           <MiniHeader />
           <div className='Moon__Description'>
                <h1>MOON</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing
                 trip away to help regain perspective and come back refreshed.
                 While you’re there, take in some history by visiting the Luna 2 and
                 Apollo 11 landing sites.</p>
                 <footer>
                    <div className='Moon__Distance'>
                        <p>AVG. DISTANCE</p>
                        <h5>384,400 km</h5>
                    </div>
                    <div className='Moon__Time'>
                        <p>Est. travel time</p>
                        <h5>3 days</h5>
                    </div>
                 </footer>
           </div>
        </div>
    </section>
  )
}

export default Moon;