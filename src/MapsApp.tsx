import { PlacesProvider } from "./context";
import { HomeScreen } from "./pages/HomeScreen";
import "./styles.css";

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  );
};
