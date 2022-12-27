import { selector } from "recoil";
import tokenAtom from "./atom";

const tokenSelector = selector({
  key: "selector/auth/token",
  get: ({ get }) => get(tokenAtom),
});

export default tokenSelector;
