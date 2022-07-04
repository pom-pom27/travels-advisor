import { Box, Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles";

// interface MapsProps {
//   setCoords: React.Dispatch<React.SetStateAction<Coords | undefined>>;
//   setBounds: React.Dispatch<React.SetStateAction<NESWBounds>>;
//   coords: Coords | undefined;
//   places: Hotel[];
// }

const Maps = ({
  setCoords: setLatLong,
  setBounds,
  coords: latLong,
  places,
  setChildClicked,
}) => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <Box className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "API_KEY" }}
        center={latLong}
        defaultCenter={latLong}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        debounced={true}
        options={undefined}
        onChange={(e) => {
          setLatLong({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlined color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place?.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place?.name || "-"}
                />
              </Paper>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </Box>
  );
};
export default Maps;
