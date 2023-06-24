import './index.scss';
import Header from '../../components/header/Header';
import Moon from '../../components/Moon/Moon';
import MiniHeader from '../../components/minHeader/MiniHeader';

function Destination() {
  return (
    <div className='Destination'>
         <Header />
         <div className='Destination__Container'>
            <div className='Destination__Area-left'>
              <h2><span>01</span> Pick your destination</h2>
              <Moon />
            </div>
            <div className='Destination__Area-right'>
              <MiniHeader />
            </div>
         </div>
    </div>
  )
}

export default Destination