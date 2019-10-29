import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Count from "./Count";

Enzyme.configure({ adapter: new Adapter() });

describe("Count", () => {
  it("should show the total count of Characters", () => {
    const wrapper = shallow(<Count count="5" />);
    const text = wrapper.find("div");
    expect(text.text()).toBe("Total Characters : 5");
  });
});
