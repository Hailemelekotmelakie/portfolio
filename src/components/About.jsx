import Reveal from "./Reveal";
import { summary } from "../data/data.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>ABOUT
          </div>
          <h2>Overview</h2>
        </Reveal>

        <Reveal className="terminal">
          <div className="terminal-bar">
            <span className="tdot"></span>
            <span className="tdot"></span>
            <span className="tdot"></span>
            <span className="tlabel">about_me.md</span>
          </div>
          <div className="terminal-body">
            <div className="prompt">cat professional_summary.txt</div>
            {summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
