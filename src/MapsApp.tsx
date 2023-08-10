import { PlacesProvider } from "./context";
import { HomeScreen } from "./pages/HomeScreen";
import "./styles.css";
import { MapProvider } from "./context/map/MapProvider";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};
