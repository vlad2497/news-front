import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "./../components/App/Layout/Header";

describe("Header component", () => {
  it("shallow Header", () => {
    shallow(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("renders Header links", () => {
    let header = mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(header.find("li")).toHaveLength(3);
  });
});
