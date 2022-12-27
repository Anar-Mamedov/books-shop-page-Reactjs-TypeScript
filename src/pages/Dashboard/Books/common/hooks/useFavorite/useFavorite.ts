import React from "react";
import { useSetRecoilState } from "recoil";
import Book from "../../../../../../common/models/book.model";
import ProductService from "../../../../../../common/services/ProductService";
import booksAtom from "../../../../../../common/store/recoil/books/atom";

export default function useFavorite() {
  const setBooks = useSetRecoilState(booksAtom);
  const [loading, setLoading] = React.useState(false);

  const toggleFavorite = async (book: Book) => {
    setLoading(true);

    const response =
      book.likes === 1
        ? await ProductService.unlike({ productId: book.id })
        : await ProductService.like({ productId: book.id });

    if (response.status === "Success") {
      setBooks(
        (prevBooks) =>
          prevBooks?.map((prevBook) =>
            prevBook.id === book.id
              ? {
                  ...prevBook,
                  likes: prevBook.likes === 1 ? 0 : 1,
                }
              : prevBook,
          ) ?? [],
      );
    }

    setLoading(false);
  };

  return {
    toggleFavorite,
    loading,
  };
}
