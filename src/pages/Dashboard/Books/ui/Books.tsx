import React from "react";
import Grid from "@mui/material/Grid";
import Book from "./components";
import { useBooks } from "../common/hooks";

export default function Books() {
  const { books } = useBooks();
  return (
    <Grid container gap="54px" justifyContent="center" paddingTop="90px">
      {books.map((book) => (
        <Book key={crypto.randomUUID()} book={book} />
      ))}
    </Grid>
  );
}
