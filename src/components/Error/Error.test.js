import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Error from "./Error";

Enzyme.configure({ adapter: new Adapter() });

describe("Error", () => {
  it("should show the error message", () => {
    const wrapper = shallow(<Error error="Internal Error" />);
    const text = wrapper.find("div");
    expect(text.length).toBe(1);
  });
});
