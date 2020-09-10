import React from "react";
import { LoginScreen } from "../../../components/09-useContext/LoginScreen";
import { shallow, mount } from "enzyme";
import { demoUser } from "../../fixture/demoUser";
import { UserContext } from "../../../components/09-useContext/UserContext";
import "@testing-library/jest-dom";

describe("Pruebas en <LoginScreen/>", () => {
  const setUser = jest.fn();
  // wrap
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should displayed correctly", () => {
    // snap
    expect(wrapper).toMatchSnapshot();
  });
  test("should execute setUser", () => {
    wrapper.find("button").simulate("click");

    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "edgar" });
  });
});
