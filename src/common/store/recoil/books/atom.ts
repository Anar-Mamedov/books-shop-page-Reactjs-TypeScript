import { atom } from "recoil";
import Book from "../../../models/book.model";

const booksAtom = atom<Book[] | null>({
  key: "dashboard/books",
  default: null,
});

export default booksAtom;
