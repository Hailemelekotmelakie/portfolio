import { navLinks, profile } from "../data.jsx";

export default function Navbar() {
  return (
    <nav>
      <div className="wrap">
        <a href="#top" className="logo">
          {profile.initials}
          <span>_</span>
          <span className="cursor"></span>
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">
          Contact
        </a>
      </div>
    </nav>
  );
}
