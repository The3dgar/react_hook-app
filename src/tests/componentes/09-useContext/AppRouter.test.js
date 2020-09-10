import React from "react";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { AppRouter } from "../../../components/09-useContext/AppRouter";
import { demoUser } from "../../fixture/demoUser";

describe("Pruebas en <AppRouter/>", () => {
  const wrapper = mount(
    <UserContext.Provider value={{user: demoUser}}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("should be displayed correctly", () => {
    expect(wrapper).toMatchSnapshot()
  });
});
