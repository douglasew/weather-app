interface ThemeSwitcherProps {}
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <button className=" text-gray-800 font-semibold py-2 px-4 rounded dark:bg-slate-900">
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            size="2xl"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            size="2xl"
            onClick={() => setTheme("light")}
            className="dark:text-white"
          />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
