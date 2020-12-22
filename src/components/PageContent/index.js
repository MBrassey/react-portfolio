import ParticlesBg from "particles-bg";
import React from "react";

const PageContent = (props) => {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="#2d93ca" />
      {props.children}
    </div>
  );
};

export default PageContent;
