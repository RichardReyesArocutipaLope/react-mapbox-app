import { useContext, useState } from "react";
import { MapContext, PlacesContext } from "../context";
import { Feature } from "../interfaces/places";
export const SearchResult = () => {
  const { isLoadingPlaces, places, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState("");

  const onPlaceClick = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const [lng, lat] = place.center;

    getRouteBetweenPoints(userLocation, [lng, lat]);
  };

  if (isLoadingPlaces)
    return (
      <div className="alert alert-primary text-center">
        <h6>Buscando</h6>
        <p>Espere por favor ...</p>
      </div>
    );

  return (
    <ul className="list-group mt-3">
      {places.map((place) => (
        <li
          className={`list-group-item list-group-item-action pointer ${
            activeId === place.id ? "active" : ""
          }`}
          key={place.id}
          onClick={() => onPlaceClick(place)}
        >
          <h6>{place.text}</h6>
          <p className="text-muted" style={{ fontSize: "12px" }}>
            {place.place_name}
          </p>
          <button
            className={`btn  btn-sm ${
              activeId === place.id
                ? "btn-outline-light"
                : "btn-outline-primary"
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
