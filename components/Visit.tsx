export default function Visit() {
  return (
    <section id="visit">
      <div className="visit-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.123!2d-96.8205!3d32.9535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2b3b5e5e5e5f%3A0x1234567890abcdef!2s5471+Belt+Line+Rd%2C+Dallas%2C+TX+75254!5e0!3m2!1sen!2sus!4v1700000000000"
          allowFullScreen
          loading="lazy"
          title="Location"
        />
      </div>
      <div className="visit-copy">
        <span className="s-tag">Come By</span>
        <h2 className="s-title">Visit<br />our house.</h2>
        <div className="visit-details">
          <div>
            <p className="vd-label">Address</p>
            <p className="vd-val">5471 Belt Line Rd<br />Dallas, TX 75254</p>
          </div>
          <div>
            <p className="vd-label">Hours</p>
            <p className="vd-val">Mon–Sat · 7am – 5:30pm<br />Sunday · 8am – 4pm</p>
          </div>
          <div>
            <p className="vd-label">Order Ahead</p>
            <p className="vd-val">
              <a href="https://order.toasttab.com" target="_blank" rel="noopener noreferrer">order.toasttab.com ↗</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
