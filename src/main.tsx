import ReactDOM from "react-dom/client";
import { MapsApp } from "./MapsApp";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoicmljaGFyZC1yZXllcyIsImEiOiJjbGwzOXE4emcxa2IwM3Jsc2MyZTR0NTV1In0.uAQCbH6jltO1CzTZ6AJ_Og";

if (!navigator.geolocation) {
  alert("Tu navegador no tiene opción de Geolocation");
  throw new Error("Tu navegador no tiene opción de Geolocation");
}

ReactDOM.createRoot(document.getElementById("root")!).render(<MapsApp />);
