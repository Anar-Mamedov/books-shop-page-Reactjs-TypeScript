import { selector } from "recoil";
import booksAtom from "./atom";

const booksSelector = selector({
  key: "selector/dashboard/books",
  get: ({ get }) => get(booksAtom),
});

export default booksSelector;
