import FadeIn from 'react-fade-in/lib/FadeIn'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <div>
            Hey, I'm{' '}
            <span className="name">
              Saurish<span className="dot">.</span>
            </span>
            <br />
          </div>
          <div>
            I'm a<span className="dev"> Developer</span>
          </div>
        </h1>
      </div>
    </div>
  )
}

export default Home
