import React from "react";
import { useRecoilState } from "recoil";
import ProductService from "../../../../../../common/services/ProductService";
import booksAtom from "../../../../../../common/store/recoil/books/atom";

export default function useBooks() {
  const [store, setStore] = useRecoilState(booksAtom);

  const handleBooks = React.useCallback(async () => {
    const response = await ProductService.get();
    const books = response?.products ?? [];

    setStore(books);
  }, [setStore]);

  React.useEffect(() => {
    if (store !== null) return;

    handleBooks();
  }, [handleBooks, store]);

  return {
    books: store ?? [],
  };
}
