import { faLocationDot, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [city, setCity] = useState("");

  const handleClick = (event: any) => {
    setCity(event.target.value);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-5 dark:bg-slate-900">
      <div className="max-w-2xl min-w-min rounded-lg bg-gray-200 p-5 w-2/4 dark:bg-slate-800">
        <div className="flex">
          <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="2xl"
              className="pointer-events-none absolute w-5 fill-gray-500 transition"
            />
          </div>
          <input
            type="text"
            className="w-full bg-white pl-2 text-base font-semibold outline-0"
            placeholder="Buscar uma cidade"
            value={city}
            id="input"
            onChange={handleClick}
          />

          <Link to={`/${city}`}>
            <button className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors">
              <FontAwesomeIcon icon={faSearch} size="2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
