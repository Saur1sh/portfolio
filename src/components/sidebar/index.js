import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import bitmoji from '../../assets/images/bit.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={bitmoji} alt="bitmoji" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#95C4B4" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#95C4B4" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#95C4B4" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          className="linkedin-icon"
          rel="noreferrer"
          href="https://www.linkedin.com/in/saur1sh/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="whitesmoke" />
        </a>
      </li>
      <li>
        <a
          className="github-icon"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Saur1sh"
        >
          <FontAwesomeIcon icon={faGithub} color="whitesmoke" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
