import { useContext } from "react";
import { MapContext } from "../context";
import { PlacesContext } from "../context/places/PlacesContext";
export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onclick = () => {
    if (!isMapReady) throw new Error("Mapa no esta listo");
    if (!userLocation) throw new Error("No hay ubicacion de usuario");

    map?.flyTo({
      zoom: 12,
      center: userLocation,
    });
  };
  return (
    <button
      className="btn btn-primary"
      style={{ position: "fixed", top: "20px", right: "20px", zIndex: 999 }}
      onClick={onclick}
    >
      Mi Ubicación
    </button>
  );
};
