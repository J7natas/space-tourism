import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import './index.scss';
const Home = () => {
  return (
    <section className='Home'>
      <Header />
      <div className='Home__container'>
        <div className='Home__areaText'>
          <p className='Home__Text-top'>SO, YOU WANT TO TRAVEL TO</p>
          <h3 className='Home__Text-destac'>SPACE</h3>
          <p>Let’s face it; if you want to go to space,
             you might as well genuinely go to outer space and not
            hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>
        <div className='Home__Button'>
          <Link to={'/destination/moon'}>
            <button>EXPLORE</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home