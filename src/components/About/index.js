import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfilePicture from "../../assets/cover/profile.jpg";
import FadeIn from "react-fade-in";
import React from "react";

function About() {
  return (
    <FadeIn>
      <section className="my-5">
        <div className="my-2">
          <div className="my-5 profileImg">
            <LazyLoadImage
              src={ProfilePicture}
              alt="Matt's Profile Picture"
              style={{
                borderRadius: "3%",
                overflow: "visible",
                boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
                height: "100%",
                width: "100%",
                marginTop: "9px",
                border: "solid 3px black",
              }}
            />
          </div>
          <div className="about-text">
            Welcome, I'm <strong>Matt Brassey</strong> - Full stack blockchain
            developer with SysOps & DevOps background. Known among staff for
            strong wit and attention to detail no matter the complexity of the
            project or severity of it’s operations. Proven experience applying
            continuous integration within small group and large, corporate team
            settings. Strong ability to modularize large, complex project
            objectives into concise and manageable parts. recently obtained the{" "}
            <strong>
              <a href="https://www.credential.net/44a73119-b770-4a10-901c-7aa6508d5c65#gs.qu4xf9">
                Certified Blockchain Architect
              </a>
            </strong>
            credential from the Blockchain Council, as well as a <strong>Full Stack
            Development Certification</strong> from the University of Arizona for
            completing a 24 Week Coding Bootcamp. Intense interest in
            distributed systems, decentralized finance and blockchain
            technology. Keen technologist with an insatiable desire to learn,
            build, improve and collaborate on world changing platforms and
            applications.
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;
