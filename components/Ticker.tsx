const items = [
  'Specialty Coffee', 'Breakfast Tacos', 'Matcha Bar', 'Craft Beer & Wine',
  'Texas-Made Gifts', 'Monomyth Roasters', 'Deep Cuts Butcher Shop',
  '5471 Belt Line Rd · Dallas TX', 'Open 7 Days',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="t-item">{item}</span>
            <span className="t-dot">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
