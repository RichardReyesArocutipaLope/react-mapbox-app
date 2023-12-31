import { useRef, useContext } from "react";
import { PlacesContext } from "../context";
import { SearchResult } from "./SearchResult";
export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();
  const onQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 1000);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar ..."
        onChange={onQueryChanged}
      />

      <SearchResult />
    </div>
  );
};
