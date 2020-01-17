import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Footer from "./../components/App/Layout/Footer";

describe("Footer component", () => {
  it("shallow Footer", () => {
    shallow(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it("renders Footer links", () => {
    let footer = mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(footer.find("li")).toHaveLength(3);
  });
});
