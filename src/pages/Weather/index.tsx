import {
  faCircleInfo,
  faSearch,
  faWater,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../icons.json";
import { Weather } from "../../@types/Weather";
import errorIMG from "../../assets/img/error/city.png";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const WeatherTypes: Weather = {};

const WeatherPage = () => {
  const [Weather, setWeather] = useState(WeatherTypes);
  const { city } = useParams();

  const key = import.meta.env.VITE_KEY;

  const GetWeatherByCity = (city: string) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  const GetWeatherByLocation = (lat: number, lon: number) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=${key}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  };

  useEffect(() => {
    if (city) {
      GetWeatherByCity(city);
    } else {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          GetWeatherByLocation(
            position.coords.latitude,
            position.coords.longitude
          );
        },

        function (error) {
          GetWeatherByCity("são%20paulo");
        }
      );
    }
  }, []);

  const Icon = Weather.weather?.[0].icon;

  return (
    <div className="flex justify-center flex-col h-screen w-screen dark:bg-slate-900">
      <div className="relative justify-center flex">
        <div className="flex flex-row justify-center space-x-48 fixed top-10">
          <div className=" flex justify-end">
            <ThemeSwitcher />
          </div>
          <div>
            <h1 className="text-4xl font-bold dark:text-white">
              {Weather.name}/{Weather.sys?.country}
            </h1>
          </div>
          <div className="search">
            <Link to={`/search`} className="search">
              <FontAwesomeIcon
                icon={faSearch}
                size="2xl"
                className=" dark:text-white"
              />
            </Link>
          </div>
        </div>
      </div>
      {Weather.cod != 200 ? (
        <div className="flex flex-col items-center">
          <img src={errorIMG} width={350} height={350} />
          <p className="dark:text-white font-bold text-2xl">
            Cidade não encontrada
          </p>
        </div>
      ) : (
        <div className=" dark:bg-slate-900">
          <div className="flex items-center flex-col">
            {typeof Icon === "string" ? (
              <img src={data[Icon]} width={400} height={400} />
            ) : (
              <div></div>
            )}
            <div className="flex justify-center flex-row">
              <h2 className="text-8xl font-bold  dark:text-white">
                {Weather.main?.temp?.toFixed(0)}
              </h2>
              <h2 className="text-2xl font-bold  dark:text-white">°C</h2>
            </div>
            <h2 className="text-3xl mt-10  dark:text-white">
              {Weather.weather?.[0].description}
            </h2>
          </div>
          <div className="flex space-x-52 justify-center items-center mt-10">
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faWater}
                size="2xl"
                className=" dark:text-white"
              />
              <div style={{ marginLeft: 15 }}>
                <p className="font-bold text-xl  dark:text-white">
                  {Weather.main?.humidity?.toFixed(0)}%
                </p>
                <p className="dark:text-white">Umidade</p>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faWind}
                size="2xl"
                className=" dark:text-white"
              />
              <div style={{ marginLeft: 15 }}>
                <p className="font-bold text-xl dark:text-white">
                  {Weather.wind?.speed?.toFixed(0)} Km/h
                </p>
                <p className="dark:text-white">Velocidade do vento</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="relative justify-center flex">
        <div className="flex justify-center mt-10 fixed bottom-10">
          <Link to={"/about"}>
            <FontAwesomeIcon
              icon={faCircleInfo}
              size="2xl"
              className=" dark:text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
