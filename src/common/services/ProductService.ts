import Book, { Details } from "../models/book.model";
import HTTPService from "./HTTPService";

interface Favorite {
  Request: { productId: number };
  Response: { status: string };
}

interface IService {
  get: () => Promise<{ products: Book[] }>;
  getDetails: (params: { bookId: number }) => Promise<{ product: Details }>;
  like: (params: Favorite["Request"]) => Promise<Favorite["Response"]>;
  unlike: (params: Favorite["Request"]) => Promise<Favorite["Response"]>;
}

class ProductService implements IService {
  get() {
    return HTTPService.get<{ products: Book[] }>("/api/v1/product/all");
  }

  getDetails({ bookId }: { bookId: number }) {
    return HTTPService.get<{ product: Details }>(
      `/api/v1/product/get/${bookId}`,
    );
  }

  like(params: Favorite["Request"]) {
    return HTTPService.post<Favorite["Response"], Favorite["Request"]>(
      "/api/v1/product/like",
      params,
    );
  }

  unlike(params: Favorite["Request"]) {
    return HTTPService.post<Favorite["Response"], Favorite["Request"]>(
      "/api/v1/product/unlike",
      params,
    );
  }
}

export default new ProductService();
