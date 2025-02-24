import { useDarkMode } from "../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react"; // Importamos los iconos

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="py-2 px-6 bg-primary-light dark:bg-button-bg-dark text-button-text-light dark:text-button-text-dark rounded-lg flex items-center gap-2"
    >
      {/* Aquí se muestra el icono dependiendo del tema */}
      {/* Si el tema es light, se muestra el icono del sol */}
      {/* Si el tema es dark, se muestra el icono de la luna */}
      {/* Si el tema es auto, se muestra el icono del monitor y el texto Auto */}
      {/*Para poner clases del modo dark, se hace dark:clase*/}
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
        </>
      ) : (
        <>
          <Monitor className="w-5 h-5" />
          <span>Auto</span>
        </>
      )}
    </button>
  );
}