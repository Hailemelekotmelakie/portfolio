import Reveal from "./Reveal";
import { skillGroups } from "../data.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>INSTRUMENT PANEL
          </div>
          <h2>Skills</h2>
        </Reveal>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <Reveal as="div" className="skill-panel" key={group.title}>
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
