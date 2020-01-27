import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Login from "./../components/Auth/Login";

describe("Login component", () => {
  /*const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);*/

  it("Shallow Login component", () => {
    shallow(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });

  it("Render email input", () => {
    let login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      login
        .find("input[name='email']")
        .at(0)
        .prop("value")
    ).toEqual("");
  });

  it("Change email input value", () => {
    let login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    login
      .find("input[name='email']")
      .at(0)
      .simulate("change", { target: { value: "test" } });

    expect(
      login
        .find("input[name='email']")
        .at(0)
        .prop("value")
    ).toEqual("test");
  });

  it("Render password input", () => {
    let login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(
      login
        .find("input[name='password']")
        .at(0)
        .prop("value")
    ).toEqual("");
  });

  it("Change password input value", () => {
    let login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    login
      .find("input[name='password']")
      .at(0)
      .simulate("change", { target: { value: "12345" } });

    expect(
      login
        .find("input[name='password']")
        .at(0)
        .prop("value")
    ).toEqual("12345");
  });

  it("Form click: processing wrong inputs values", () => {
    let login = mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    login
      .find("input[name='email']")
      .at(0)
      .simulate("change", { target: { value: "test" } });

    expect(
      login
        .find("input[name='email']")
        .at(0)
        .prop("value")
    ).toEqual("test");

    login
      .find("input[name='password']")
      .at(0)
      .simulate("change", { target: { value: "12345" } });

    expect(
      login
        .find("input[name='password']")
        .at(0)
        .prop("value")
    ).toEqual("12345");

    login.find(".form__submit").simulate("click");

    /*expect(login.find(".form__error").text()).toEqual(
      "Данные введены не верно!"
    );*/
  });
});
