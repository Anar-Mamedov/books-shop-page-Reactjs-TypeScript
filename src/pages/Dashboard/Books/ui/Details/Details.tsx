import { useParams } from "react-router-dom";
import { CardMedia, Grid, IconButton, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { StyledFavorite } from "./styles";
import { useDetails } from "../components/Book/common/hooks";
import { Details as IDetails } from "../../../../../common/models/book.model";

function Detail({ detail }: { detail: IDetails }) {
  return (
    <Grid
      container
      item
      xs={10}
      border="1px solid #9f9f9f"
      borderRadius="41px"
      direction="row"
      padding="0 0 50px 30px"
      gap={5}
    >
      <Grid container item flex={0} pt="50px">
        <CardMedia
          sx={{
            width: "241px",
            height: "333px",
            objectFit: "cover",
            backgroundPosition: "center",
            filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
          }}
          image={`${process.env.REACT_APP_API}${detail.image}`}
          title="green iguana"
        />
      </Grid>
      <Grid container item flex={1} direction="column" pt="15px">
        <Grid container justifyContent="flex-end" pr="30px">
          <StyledFavorite>
            {detail.likes?.length} Likes
            <IconButton size="small">
              <FavoriteBorderIcon />
            </IconButton>
          </StyledFavorite>
        </Grid>
        <Grid container item pr="30px">
          <Typography
            sx={{
              width: "auto",
            }}
            variant="h4"
            color="initial"
          >
            The Art of Computer Programing
          </Typography>
        </Grid>
        <Grid container item mt={3} mb={2} pr="30px">
          <Typography variant="body2" color="initial">
            {detail.description}
          </Typography>
        </Grid>
        <Grid container item justifyContent="flex-end" mt="auto" mr="-30px">
          <Grid
            container
            item
            width="100px"
            borderRadius="50px 0px 0px 50px"
            padding="6px 0px"
            justifyContent="center"
            sx={{ bgcolor: "#0671E1" }}
          >
            <Typography
              fontWeight="bold"
              color="white"
              fontSize="20px"
              component="div"
            >
              {detail.price} TL
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function Details() {
  const { bookId } = useParams();
  const detail = useDetails(bookId);

  if (detail === undefined) return null;

  return (
    <Grid container padding="30px 0" justifyContent="center">
      {detail === null ? (
        <h1>Details not found</h1>
      ) : (
        <Detail detail={detail} />
      )}
    </Grid>
  );
}
