import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Cheese from "../../containers/cheese";

describe("<Cheese />", function() {

  describe("render", function() {

    it("unc-cheese class names present", function() {
      const wrapper = shallow(<Cheese />);
      expect(wrapper.hasClass("unc-cheese")).to.be.true;
      expect(wrapper.find(".unc-cheese > .unc-cheese__header")).to.have.length(1);
      expect(wrapper.find(".unc-cheese > .unc-cheese__content")).to.have.length(1);
    });
    
    it("should set the title", function() {
      const wrapper = shallow(<Cheese title="foo" />);
      expect(wrapper.find(".unc-cheese__header").text()).to.equal("foo");
    });

    it("should define require string", function() {
      expect(Cheese.propTypes.title).to.equal(React.PropTypes.string.isRequired);
    });

  });

});
