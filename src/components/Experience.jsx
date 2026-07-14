import Reveal from "./Reveal";
import { experience } from "../data.jsx";
import { IconLeaf } from "@tabler/icons-react";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>FLIGHT LOG
          </div>
          <h2>Experience</h2>
          <p>A chronological record - most recent entry first.</p>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="div" className="tl-item" key={job.role + job.company}>
              <div className="tl-date">
                {job.dateRange}
                {job.badges.map((badge) => (
                  <span className="badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
              <div className="tl-role">{job.role}</div>
              <div className="tl-co">{job.company}</div>
              <ul>
                {job.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              {job.eduNote && (
                <div className="edu-note">
                  <IconLeaf size={19} /> <strong>{job.eduNote.degree}</strong>
                  {job.eduNote.rest}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
