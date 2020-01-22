import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Login from "./../components/Auth/Login";

describe("Login component", () => {
  it("shallow Login", () => {
    shallow(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("renders Login links", () => {
    let footer = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    /*expect(footer.find("li")).toHaveLength(3);*/
  });
});
