import React from "react";
import { Details } from "../../../../../../../../../common/models/book.model";
import ProductService from "../../../../../../../../../common/services/ProductService";

export default function useDetails(bookId: string | undefined) {
  const [details, setDetails] = React.useState<Details | null | undefined>(
    undefined,
  );

  const handleDetails = React.useCallback(async () => {
    const response = await ProductService.getDetails({
      bookId: Number(bookId) as number,
    });

    if (!response?.product) {
      setDetails(null);
    }

    setDetails(response.product);
  }, [bookId]);

  React.useEffect(() => {
    if (!bookId) return;

    handleDetails();
  }, [bookId, handleDetails]);

  return details;
}
