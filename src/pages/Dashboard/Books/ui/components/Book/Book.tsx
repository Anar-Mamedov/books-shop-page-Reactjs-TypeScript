import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import NotFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IBook from "../../../../../../common/models/book.model";
import { useFavorite } from "../../../common/hooks";

interface Props {
  book: IBook;
}

export default function Book({ book }: Props) {
  const { toggleFavorite, loading } = useFavorite();
  const navigate = useNavigate();

  const handleFavorite = () => {
    toggleFavorite(book);
  };

  const handleNavigate = () => {
    navigate(`/dashboard/books/${book.id}`);
  };

  const liked = book.likes === 1;

  return (
    <Grid
      container
      width="381px"
      height="644px"
      border={1}
      borderColor="gray"
      borderRadius="41px"
      justifyContent="flex-start"
      flexDirection="column"
      alignItems="center"
      gap="30px"
    >
      <Grid
        container
        item
        width="100%"
        height="64px"
        padding="0 15px 5px 0px"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <IconButton
          color={liked ? "error" : "default"}
          onClick={handleFavorite}
          disabled={loading}
        >
          {liked ? (
            <FavoriteIcon fontSize="large" />
          ) : (
            <NotFavoriteIcon fontSize="large" />
          )}
        </IconButton>
      </Grid>
      <CardMedia
        sx={{
          width: "241px",
          height: "333px",
          objectFit: "cover",
          backgroundPosition: "center",
          filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
        }}
        image={`${process.env.REACT_APP_API}${book.image}`}
        title="green iguana"
        onClick={handleNavigate}
      />
      <Typography
        fontFamily={"'Roboto', sans-serif"}
        fontWeight="400"
        fontSize="18px"
        width="250px"
        textAlign="center"
      >
        {book.name}
      </Typography>
      <Typography
        marginBottom="auto !important"
        fontFamily={"'Roboto', sans-serif"}
        fontWeight="500"
        fontSize="30px"
        width="250px"
        textAlign="center"
        borderTop="2px solid #C7C7C7"
        color="#0671E1"
        padding="10px 0"
      >
        {book.price} TL
      </Typography>
    </Grid>
  );
}
