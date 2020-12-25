import FadeIn from "react-fade-in";
import React from "react";

function Resume() {
  return (
    <FadeIn>
      <section className="my-5">
        <div className="my-2">
          <br></br>
          <div className="resume-text">
            {" "}
            My past six years of expreience in the areas of:{" "}
            <strong>Git</strong>,<strong> Bash</strong>,
            <strong> Markdown</strong>,<strong> HTML5</strong>,
            <strong> CSS3</strong>, <strong> JS[ES6]</strong>,
            <strong> Node</strong>, <strong> MySQL</strong>,
            <strong> MongoDB</strong>, <strong> Express</strong>,
            <strong> React</strong>, <strong>JSX</strong> &
            <strong> Solidity</strong> are documented and can be reviewed on my{" "}
            <a href="https://github.com/MBrassey">github</a> profile. I recently
            obtained the{" "}
            <strong>
              <a href="https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65">
                Certified Blockchain Architect
              </a>
            </strong>{" "}
            credential from the{" "}
            <strong>
              <a href="https://www.blockchain-council.org">
                Blockchain Council
              </a>
            </strong>
            , as well as a{" "}
            <strong>Full Stack Development Certification </strong>
            from the <strong>University of Arizona</strong> for completing a 24 Week
            Intensive Coding Bootcamp. I'm currently open to and actively seeking work
            in the areas of front/back end web & blockchain development. My
            resume is provided below, along with a chart depicting my past
            week's coding activity and badges representing my areas of
            proficiency.{" "}
          </div>
          <form
            action="https://brassey.io/resume.pdf"
            method="get"
            target="_blank"
          >
            <button type="submit">Download My Resume</button>
          </form>
          <div className="CAcontainer">
            <div className="CodingActivity"></div>
          </div>

          <ul className="dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-bootstrap"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-markdown"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-ethereum"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
          </ul>
        </div>
      </section>
    </FadeIn>
  );
}

export default Resume;
