import axios from "axios";
import { Coords } from "google-map-react";
import { RootHotel } from "../types/hotel";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

export const getHotelList = async (ne: Coords, sw: Coords) => {
  try {
    const {
      data: { data },
    } = await axios.get<RootHotel>(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
        currency: "IDR",
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "067e70c44emshe88d648cbf41b9fp1f2e57jsn649260635ca0",
      },
    });

    console.log(data);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
    } else {
      console.log(error);
    }
  }
};
