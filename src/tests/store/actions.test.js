import { expect } from "chai";

import createStore from "../../store/store";
import * as Actions from "../../store/actions";
import * as Types from "../../store/types";

describe("Actions", function() {

  describe("increment", function() {

    it("should construct action", function() {
      var action = Actions.increment();
      expect(action).to.deep.equal({ type: Types.INCREMENT });
    });

    it("should inrement the state", function() {
      // arrange
      var s = createStore({ value: 3 });
      // act
      s.dispatch(Actions.increment());
      // assert
      expect(s.getState().value).to.equal(4);
    });

  });

  describe("decrement", function() {

    it("should construct action", function() {
      var action = Actions.decrement();
      expect(action).to.deep.equal({ type: Types.DECREMENT });
    });

    it("should decrement the state", function() {
      // arrange
      var s = createStore({ value: 9 });
      // act
      s.dispatch(Actions.decrement());
      // assert
      expect(s.getState().value).to.equal(8);
    });

  });

});
