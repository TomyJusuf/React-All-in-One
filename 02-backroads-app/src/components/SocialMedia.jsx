function SocialMedia({ id, href, icon }) {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
        <i className={icon}></i>
      </a>
    </li>
  )
}
export default SocialMedia
