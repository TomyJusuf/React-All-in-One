import logo from '../images/logo.svg'
import { pageLists, socialMediaLinks } from '../data'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Links */}
        <ul className="nav-links" id="nav-links">
          {pageLists.map((link) => {
            const { id, href, title } = link
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {title}
                </a>
              </li>
            )
          })}
        </ul>

        {/*  Social media links */}
        <ul className="nav-icons">
          {socialMediaLinks.map((link) => {
            const { id, href, icon } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
