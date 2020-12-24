import FadeIn from "react-fade-in";
import React from "react";

function Resume() {
  return (
    <FadeIn>
      <section className="my-5">
        <div className="my-2">
          <form
            action="https://brassey.io/resume.pdf"
            method="get"
            target="_blank"
          >
            <button type="submit">Download My Resume</button>
          </form>
          <br></br>
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
