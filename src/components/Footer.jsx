import github from '../../img/github.svg'
import instagram from '../../img/instagram-square.svg'
import twitter from '../../img/twitter-square.svg'

export default function Footer() {
    return (
        <footer className="footer">
            <a className="footer-icon" target="_blank" href="https://twitter.com/theusf40">
              <img src={twitter} />
            </a>
            <a className="footer-icon" href="https://www.instagram.com/theusf40/">
              <img src={instagram} />
            </a>
            <a className='footer-icon' href="https://github.com/Matheus-Felipe-C">
              <img src={github}/>
            </a>
        </footer>
    )
}