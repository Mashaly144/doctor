import { Container } from 'react-bootstrap';
import logo from '../../Assets/Img/logo.svg';
import './footer.css';
import facebook from '../../Assets/Img/facebook.svg';
import insta from '../../Assets/Img/insta.svg';
import twitter from '../../Assets/Img/twitter.svg';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <Container>
        <ul className='d-flex justify-content-between '>
          <li>
            <Link to={'/'}>
              <img src={logo} alt='' />
            </Link>
          </li>
          <ul>
            <li className='head__li'>Quick Links</li>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
          <ul>
            <li className='head__li'>Services</li>
            <li>AI X-ray</li>
            <li>
              <Link to={'/health'}>Checking Health</Link>
            </li>
            <li>Make a Consultation</li>
          </ul>
          <ul>
            <li className='head__li'>Explore</li>
            <li>
              <a href={'/faq'}>FAQ</a>
            </li>
            <li>Privacy Policey</li>
            <li>Terms & Conditions</li>
          </ul>
        </ul>
        <hr />
        <div className='d-flex justify-content-between'>
          <div className='social-icon d-flex'>
            <img src={facebook} alt='facebook' />
            <img src={insta} alt='insta' />
            <img src={twitter} alt='twitter' />
          </div>
          <p>Copyright @ 2023. Pulse</p>
        </div>
      </Container>
    </footer>
  );
}
