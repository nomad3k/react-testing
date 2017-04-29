import update from "react-addons-update";

import * as Types from "./types";

const initialState = {
  value: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.INCREMENT:
      return update(state, { value: { $set: state.value + 1 } });

    case Types.DECREMENT:
      return update(state, { value: { $set: state.value - 1 } });

    default:
      return state;
  }
}
