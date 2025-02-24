import type { Route } from "./+types/home";
import ThemeToggle from "~/components/ThemeToggle";
import UserDescription from "~/components/UserDescription";
import UserPersona from "~/components/UserPersona";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (

    <div className="min-h-screen">
      <div className="w-full flex justify-end p-4">
        <ThemeToggle />
      </div>
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold text-main-header-light dark:text-main-header-dark mb-1">
          User Persona
        </h1>
        <hr className="bg-primary-light dark:bg-primary-dark h-1 w-26 border-0 rounded-full mb-5" />
         {/* Grid Principal que se ve a 12 */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* UserPersona es todo el contenido de la columna de la imagen de la chica */}
          <UserPersona />
          {/* UserDescription contiene las 4 columnas similares. */}
          <UserDescription />
        </div>
      </div>
    </div>
  );
}
