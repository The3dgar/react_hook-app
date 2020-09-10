import React from "react";
import { shallow, mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
const { HomeScreen } = require("../../../components/09-useContext/HomeScreen");

describe("Pruebas en <HomeScree/>", () => {
  const user = {
    name: "Edgar",
    email: "edgar@mail.com"
  }
  // aqui el shallow solo renderiza el primer componente

  const wrapper = mount(
    <UserContext.Provider value={{user}}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test("should displayed", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
