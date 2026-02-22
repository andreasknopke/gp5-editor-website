interface NavigationProps {
  isOpen: boolean
  onClose: () => void
}

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "#installation", label: "Installation" },
  { href: "#faq", label: "FAQ" },
  { href: "#community", label: "Community" },
]

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
      <ul className="nav-list">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="nav-link" onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="https://github.com/andreasknopke/GP5-Plugin"
            className="nav-link nav-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </li>
      </ul>
    </nav>
  )
}