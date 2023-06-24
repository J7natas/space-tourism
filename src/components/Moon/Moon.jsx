import mon from '../../assets/destination/image-moon.png';
import './index.scss';

const Moon = () => {
  return (
    <div className='Moon'>
        <img src={mon} />
        <div className='Moon__Text'>
            <h1>MOON</h1>
            <p>See our planet as you’ve never seen it before.
             A perfect relaxing trip away to help regain perspective and
             come back refreshed. While you’re there, take in some
             history by visiting the Luna 2 and Apollo 11 landing sites.</p>
             <p className='Moon__Line'></p>
             <footer>
                <div className='Moon__distance'>
                    <h5>AVG. DISTANCE</h5>
                    <p>384,400 km</p>
                </div>
                <div className='Moon__time'>
                    <h5>Est. travel time</h5>
                    <p>3 days</p>
                </div>
             </footer>
        </div>
    </div>
  )
}

export default Moon;