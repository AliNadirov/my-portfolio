import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">Ali Front-End</div>
        <div className="footer-copy">© 2025 Ali Front-End. All rights reserved.</div>
      </div>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="xMidYMid meet">
        <path
          d="M0,20 C150,80 350,10 600,30 C850,50 1050,80 1200,20 L1200,120 L0,120 Z"
          fill="#fdc435"
        />
      </svg>
    </footer>
  );
}