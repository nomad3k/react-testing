import { expect } from "chai";
import * as Types from "../../store/types";

describe("Types", function() {

  it("all types should be unique", function() {
    var counter = { };
    var fails = [ ];
    for (var a in Types) {
      var v = Types[a];
      if (!counter[v]) {
        counter[v] = [ a ];
      } else {
        counter[v].push(a);
        fails.push(v);
      }
    }
    expect(fails.map(v => ({ value: v, types: counter[v] }) )).to.deep.equal([]);
  });

});
