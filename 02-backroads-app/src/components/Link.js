function Link({ href, title }) {
  return (
    <li>
      <a href={href} className="footer-link">
        {title}
      </a>
    </li>
  )
}
export default Link
