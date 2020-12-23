import ProfilePicture from "../../assets/cover/profile.jpg";
import React from "react";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="my-5">
          <img
            src={ProfilePicture}
            alt="Matt's Profile Picture"
            style={{
              borderRadius: "3%",
              overflow: "visible",
              boxShadow: "0 12px 24px 0 rgba(0, 0, 0, 0.7)",
              height: "240px",
              width: "240px",
              marginTop: "9px",
              border: "solid 3px black",
            }}
          />
        </div>
        <div className="about-text">Welcome, I'm Matt Brassey - Full stack blockchain developer with SysOps & DevOps background. Known among staff for strong wit and attention to detail no matter the complexity of the project or severity of it’s operations. Proven experience applying continuous integration within small group and large, corporate team settings. Strong ability to modularize large, complex project objectives into concise and manageable parts. Recently completed a 24-week bootcamp earning a certificate in full stack development from the University of Arizona. Intense interest in distributed systems, decentralized finance and blockchain technology. Keen technologist with an insatiable desire to learn, build, improve and collaborate on world changing platforms and applications.</div>
      </div>
    </section>
  );
}

export default About;
