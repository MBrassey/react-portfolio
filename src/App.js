import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Project from "./components/Project";
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: "full-stack",
      description: "Full Stack Applications",
    },
    { name: "component", description: "Application Components" },
    { name: "gist", description: "Concepts & Code Snippets" },
    {
      name: "blockchain",
      description: "Blockchain Enabled Applications",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
