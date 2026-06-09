const reviews = [
  { initial: 'S', name: 'Sarah M.', source: 'Google Review', text: '"Best coffee in North Dallas, hands down. The matcha is incredible and the breakfast tacos are the real deal. This place has become my daily stop."' },
  { initial: 'J', name: 'James R.', source: 'Google Review', text: '"Finally a coffee shop in Dallas that actually cares about quality. The vibe is perfect, the staff is amazing and the gifts section is a hidden gem."' },
  { initial: 'A', name: 'Amanda K.', source: 'Google Review', text: '"Love this place so much. The chorizo taco with a cortado is the perfect combo. Everything is local, fresh and made with love. 10/10."' },
  { initial: 'M', name: 'Mike T.', source: 'Google Review', text: '"The seasonal matcha drinks are next level. I\'ve tried every coffee shop in the area and Local Jonny\'s is just different. It feels like a real neighborhood spot."' },
];

export default function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-header">
        <span className="s-tag">What People Say</span>
        <h2 className="s-title">The locals<br /><em>love it.</em></h2>
      </div>
      <div className="reviews-grid">
        {reviews.map(r => (
          <div className="review-card" key={r.name}>
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">
              <div className="review-avatar">{r.initial}</div>
              <div>
                <p className="review-name">{r.name}</p>
                <p className="review-source">{r.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
