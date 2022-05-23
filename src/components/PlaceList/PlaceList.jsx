import {
  Box,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { createRef, useEffect, useRef, useState } from "react";
import { Hotel } from "../../data/types/hotel";
import PlaceDetail from "../PlaceDetail/PlaceDetail";
import useStyles from "./styles";

// interface PlaceListProps {
//   places: Hotel[];
//   childClicked: any;
//   isLoading: boolean;
// }

const PlaceList = ({ places, childClicked, isLoading }) => {
  const classes = useStyles();
  const [type, setType] = useState("restourants");
  const [rating, setRating] = useState("");
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places.length)
      .fill(0)
      .map((_, i) => elRefs[i] || createRef());

    setElRefs(refs);
  }, [places]);

  return (
    <Box className={classes.container}>
      <Typography variant="h4">
        Restaurant, Hotels and Attractions around you
      </Typography>
      {isLoading ? (
        <Box className={classes.loading}>
          <CircularProgress size="5rem" />
        </Box>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restourants">Restourants</MenuItem>
              <MenuItem value="places">Places</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places.map((place, idx) => (
              <Grid ref={elRefs[idx]} xs={12} item key={idx}>
                <PlaceDetail
                  place={place}
                  selected={Number(childClicked) === idx}
                  refProp={elRefs[idx]}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default PlaceList;
