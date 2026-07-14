import Reveal from "./Reveal";
import { projects } from "../data/data.jsx";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>PROJECTS
          </div>
          <h2>Selected work</h2>
        </Reveal>

        <div className="projects">
          {projects.map((project) => (
            <Reveal
              as="div"
              className={`proj-card ${project.featured ? "featured" : ""}`.trim()}
              key={project.title}
            >
              <div className="proj-top">
                <div>
                  <h3>{project.title}</h3>
                  <div className="proj-sub">{project.sub}</div>
                </div>
                <div className="proj-status">
                  <span className="pt2"></span>
                  {project.status}
                </div>
              </div>
              <p className="desc">{project.desc}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
