import * as Types from "./types";

export function increment() {
  return { type: Types.INCREMENT };
}

export function decrement() {
  return { type: Types.DECREMENT };
}
