import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Film from "./Film";

Enzyme.configure({ adapter: new Adapter() });

describe("Film", () => {
  it("should show the list of films", () => {
    const wrapper = shallow(<Film film="https://swapi.co/api/films/2/" />);
    const text = wrapper.find("div a");
    expect(text.text()).toBe("https://swapi.co/api/films/2/");
  });
});
