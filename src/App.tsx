import Grid from "@material-ui/core/Grid";
import Header from "./components/Header/Header";
import PlaceList from "./components/PlaceList/PlaceList";
import Maps from "./components/Maps/Maps";
import { useEffect, useState } from "react";
import { getHotelList } from "./data/api";
import { Hotel } from "./data/types/hotel";
import { NESWBounds, Coords } from "google-map-react";

function App() {
  const [bounds, setBounds] = useState<NESWBounds>({
    ne: { lat: 0, lng: 0 },
    sw: { lat: 0, lng: 0 },
  });
  const [coords, setCoords] = useState<Coords | undefined>();
  const [places, setPlaces] = useState<Hotel[]>([]);

  const [childClicked, setChildClicked] = useState<any>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoords({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    console.log(`coords:  ${coords}`);
    setIsLoading(true);

    getHotelList(bounds.ne, bounds.sw).then((hotels) => {
      setPlaces(hotels ?? []);

      setIsLoading(false);
    });
  }, [coords, bounds]);

  return (
    <>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <PlaceList
            isLoading={isLoading}
            places={places}
            childClicked={childClicked}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps
            places={places}
            setCoords={setCoords}
            setBounds={setBounds}
            coords={coords}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
