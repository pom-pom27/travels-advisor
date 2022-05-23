import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import { LocationOn, Phone } from "@material-ui/icons";
import { forwardRef, MutableRefObject } from "react";
import { Hotel } from "../../data/types/hotel";

import useStyles from "./styles";

interface PlaceDetailProps {
  place: Hotel;
  selected: boolean;
  refProp: any;
}

const PlaceDetail: React.FC<PlaceDetailProps> = ({
  place,
  selected,
  refProp,
}) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({
      behavior: "smooth",
    });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price || "-"}
          </Typography>
        </Box>
        {place?.awards?.map((award, idx) => (
          <Box
            key={idx}
            my={1}
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map((name) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color={"textSecondary"}
            className={classes.subtitle}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color={"textSecondary"}
            className={classes.subtitle}
          >
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          {place.web_url && (
            <Button
              size="small"
              color={"primary"}
              onClick={() => window.open(place.web_url, "_blank")}
            >
              Trip Advisor
            </Button>
          )}
          {place.website && (
            <Button
              size="small"
              color={"primary"}
              onClick={() => window.open(place.website, "_blank")}
            >
              Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetail;
