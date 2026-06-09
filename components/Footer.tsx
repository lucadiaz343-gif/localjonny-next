export default function Footer() {
  return (
    <footer className="lj-footer">
      <div>
        <p className="f-logo">Local <span>Jonny&apos;s</span></p>
        <p className="f-sub">Coffee bar and general store.<br />North Dallas. No chains, no shortcuts.</p>
      </div>
      <div className="f-col">
        <p className="f-col-title">Navigate</p>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gifts">Shop</a></li>
          <li><a href="#visit">Visit</a></li>
          <li><a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">Order Online</a></li>
        </ul>
      </div>
      <div className="f-col">
        <p className="f-col-title">Connect</p>
        <ul>
          <li><a href="https://instagram.com/localjonnystx" target="_blank" rel="noopener noreferrer">@localjonnystx</a></li>
          <li><a href="mailto:localjonnyttx@gmail.com">localjonnyttx@gmail.com</a></li>
          <li style={{ marginTop: '.5rem', color: 'rgba(255,255,255,.2)' }}>5471 Belt Line Rd</li>
          <li style={{ color: 'rgba(255,255,255,.2)' }}>Dallas, TX 75254</li>
        </ul>
      </div>
      <div className="f-bottom">
        <p>© 2025 Local Jonny&apos;s General Store · Dallas, Texas</p>
        <a className="f-insta" href="https://instagram.com/localjonnystx" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
      </div>
    </footer>
  );
}
