import { Link } from 'react-router-dom';
import './index.scss';

const MiniHeader = () => {
  return (
    <div className='MiniHeader'>
        <Link to={'/destination/moon'}>
         <h3 id='active-mon'>MOON</h3>
        </Link>
        <Link to={'/destination/mars'}>
            <h3 id='active-mars'>MARS</h3>
        </Link>
        <Link to={'/destination/europa'}>
          <h3 id='active-europa'>EUROPA</h3>
        </Link>
        <Link to={'/destination/titan'}>
          <h3 id='active-titan'>TITAN</h3>
        </Link>
    </div>
  )
}

export default MiniHeader