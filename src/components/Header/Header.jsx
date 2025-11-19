import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Ali Front-End</div>
      <nav className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#contacts">Contact</a>
      </nav>
    </header>
  );
}