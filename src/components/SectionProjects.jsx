import { useEffect } from 'react';
import projects from '../data/projects';

const SCROLL_SPEED = 100; // px per second

function setScrollDuration(img) {
  const container = img.closest('.project__img');
  const distance = Math.max(img.offsetHeight - container.clientHeight, 0);
  img.style.transitionDuration = `${distance / SCROLL_SPEED}s`;
}

function SectionProjects() {
  useEffect(() => {
    const updateAll = () =>
      document.querySelectorAll('.project__img img').forEach(setScrollDuration);
    window.addEventListener('resize', updateAll);
    return () => window.removeEventListener('resize', updateAll);
  }, []);

  return (
    <>
      <section id="projects" className="min-vh-100 d-flex align-items-center">
        <div className="container my-5">
          <h2 className="display-2">Projects</h2>
          {projects.map((project, i) => {
            return (
              <div
                key={i}
                className="project row bg-grey shadow-lg p-4 p-sm-5 mt-5 align-items-center">
                <div
                  className={`project__img p-0 mt-4 mt-md-0 col-12 col-md-5 ${
                    i % 2 ? '' : 'order-md-0'
                  } order-1`}>
                  <a href={project.demoUrl} target="_blank">
                    <img
                      src={project.imgSrc}
                      onLoad={(e) => setScrollDuration(e.currentTarget)}></img>
                  </a>
                </div>
                <div className="text-start col-12 col-md-7 px-0 px-md-5 mt-4 mt-sm-5 mt-md-0">
                  <h3 className="display-4 fw-normal">{project.title}</h3>
                  <p className="mt-4 mb-1">
                    <span className="fw-semi">Description: </span>
                    {project.description}
                  </p>
                  <p className="mb-1">
                    <span className="fw-semi">Functional: </span>
                    {project.functional}
                  </p>
                  <p>
                    <span className="fw-semi">Tools: </span>
                    {project.tools}
                  </p>
                  <div className="d-flex gap-3">
                    <p>
                      <a className="fw-semi" href={project.demoUrl} target="_blank">
                        Live Demo
                      </a>
                    </p>
                    <p>
                      {project.repoUrl ? (
                        <a className="fw-semi" href={project.repoUrl} target="_blank">
                          GitHub
                        </a>
                      ) : null}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default SectionProjects;
