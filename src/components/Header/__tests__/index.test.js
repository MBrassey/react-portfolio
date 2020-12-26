import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

import Header from "..";

afterEach(cleanup);

describe("Header component", () => {
  it("renders", () => {
    render(<Header />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
