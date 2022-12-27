export interface Details {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  timeStamp: Date;
  likes: { id: number }[];
}

interface Book {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  timeStamp: Date;
  likes: number;
}

export default Book;
