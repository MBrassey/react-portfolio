import ProfilePicture from "../../assets/cover/profile.jpg";
import React from "react";

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
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
        <p>test</p>
      </div>
    </section>
  );
}

export default About;
