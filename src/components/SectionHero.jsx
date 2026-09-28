function SectionHero() {
  return (
    <>
      <section id="about" className="hero min-vh-100 d-flex align-items-center bg-grey">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
              <div className="hero-img"></div>
            </div>
            <div className="col-12 col-md-7 mt-5 mt-md-0">
              <h1 className="display-2">Frontend Developer</h1>
              <p>
                Hi, I'm Vladislav Bryl. A passionate Frontend React Developer with focus on WordPress
              </p>
              <h2>Tech Stack</h2>
              <ul>
                <li>Claude/Codex</li>
                <li>JavaScript, TypeScript, PHP</li>
                <li>HTML 5, CSS</li>
                <li>SCSS, Tailwind</li>
                <li>React, React Native</li>
                <li>Redux, Zustand</li>
                <li>Figma (Software)</li>
                <li>WordPress, ACF Pro</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionHero;
