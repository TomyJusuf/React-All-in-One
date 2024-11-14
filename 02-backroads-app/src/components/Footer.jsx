import { pageLists, socialMediaLinks } from '../data'
function Footer() {
  return (
    <footer className="section footer">
      {/* Links */}
      <ul className="footer-links">
        {pageLists.map((link) => {
          const { id, href, title } = link
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {title}
              </a>
            </li>
          )
        })}
      </ul>

      {/* Social media links */}
      <ul className="footer-icons">
        {socialMediaLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
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
