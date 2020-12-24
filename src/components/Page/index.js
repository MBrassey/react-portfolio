import { capitalizeFirstLetter } from "../../utils/helpers";
import PageContent from "../PageContent";
import Portfolio from "../Portfolio";
import FadeIn from "react-fade-in";
import Contact from "../Contact";
import Resume from "../Resume";
import About from "../About";
import React from "react";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return (<FadeIn><Portfolio /></FadeIn>);
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </section>
  );
}
export default Page;
