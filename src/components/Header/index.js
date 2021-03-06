import TextScramble from "@twistezo/react-text-scramble";
import FadeIn from "react-fade-in";
import React from "react";
import "./index.scss";

const texts = [
  "Matt Brassey",
  "Software Developer",
  "matt@brassey.io"
];

function Header(props) {
  return (
    <FadeIn>
      <header className="flex-row space-between px-1">
        <div className="scramble">
          <TextScramble
            texts={texts}
            letterSpeed={5}
            nextLetterSpeed={100}
            pauseTime={2200}
          />
        </div>
        {props.children}
      </header>
    </FadeIn>
  );
}

export default Header;
