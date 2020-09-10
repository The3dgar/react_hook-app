import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("pruebas en HookApp", () => {
  test("should render HokkApp", () => {
    const wrapper = shallow(<HookApp/>);
    expect(wrapper).toMatchSnapshot();
  });
});
