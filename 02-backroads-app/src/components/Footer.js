import { pageLists, socialMediaLinks } from '../data'
import Link from './Link'
import SocialMedia from './SocialMedia'
function Footer() {
  return (
    <footer className="section footer">
      {/* Links */}
      <ul className="footer-links">
        {pageLists.map((link) => {
          return <Link key={link.id} {...link} />
        })}
      </ul>

      {/* Social media links */}
      <ul className="footer-icons">
        {socialMediaLinks.map((link) => {
          return <SocialMedia key={link.id} {...link} />
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
