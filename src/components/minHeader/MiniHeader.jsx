import { Link } from 'react-router-dom';
import './index.scss';

const MiniHeader = () => {
  return (
    <div className='MiniHeader'>
        <Link>
         <h3 id='active-mon'>MOON</h3>
        </Link>
        <Link>
            <h3>MARS</h3>
        </Link>
        <Link>
          <h3>EUROPA</h3>
        </Link>
        <Link>
          <h3>TITAN</h3>
        </Link>
    </div>
  )
}

export default MiniHeader