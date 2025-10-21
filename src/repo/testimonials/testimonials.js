import "./testimonials.css";

export default function Parallax() {
  return (
    <main className="xx-container">
      <div className="xx-card xx-group">
        <div className="xx-images">
          <img
            className="xx-img xx-right"
            src="https://images.unsplash.com/photo-1755796594130-d25977e4951b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjA2MjE2MzF8&ixlib=rb-4.1.0&q=80&w=400"
            alt="Portrait of Alex MorganFieven Yenieneh"
          />
        </div>
        <div className="xx-info">
          <h4>
            Fieven Yenieneh, <small>Full‑stack Engineer</small>
          </h4>
          <p>
            Fieven designs and builds performant, accessible web applications.
            Focus areas include component architecture, gradual performance
            improvements, and coaching teams to adopt best practices.
          </p>
          <div className="xx-dots">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <div
                key={i}
                className={`xx-dot ${i === 0 ? "xx-dot-selected" : undefined}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
