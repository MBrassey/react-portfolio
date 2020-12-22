import React from "react";

function Resume() {
  return (
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
        <p>test</p>
      </div>
    </section>
  );
}

export default Resume;
