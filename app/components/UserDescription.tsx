import React from "react";

export default function UserDescription() {
  return (
    // Grid de 12 columnas
    // En pantallas grandes ocupa 8 
    // En pantallas medianas ocupa 6 
    // En pantallas pequeñas ocupa 12
    <div className="col-span-12 md:col-span-6 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Primer contenedor */}
      <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-card-h2-light dark:text-card-h2-dark">
          Bio
        </h2>

        <p className="text-card-paragraph-light dark:text-card-paragraph-dark">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Imperdiet mauris enim, vel
          condimentum risus eget rhoncus,
          vitae. Viverra pulvinar cras eu ac
          sed nunc dui. Risus pharetra, lacus
          interdum quam. Egestas aliquam
          dui at proin. Amet, pharetra,
          scelerisque molestie nibh porttitor
          sem malesuada cursus eget. Orci.
        </p>
      </div>

      {/* Segundo contenedor */}
      <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-card-h2-light dark:text-card-h2-dark">
          Personality
        </h2>
        <ul className=" text-card-paragraph-light dark:text-card-paragraph-dark">
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr>Hardworking</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr>Smart</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr>Expressive</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr>Thoughtful</li>
        </ul>
      </div>

      {/* Tercer contenedor */}
      <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-card-h2-light dark:text-card-h2-dark">
          Pain Points
        </h2>
        <ul className=" text-card-paragraph-light dark:text-card-paragraph-dark">
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
        </ul>
      </div>

      {/* Cuarto contenedor */}
      <div className="bg-card-bg-light dark:bg-card-bg-dark p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2 text-card-h2-light dark:text-card-h2-dark">
          Goals
        </h2>
        <ul className=" text-card-paragraph-light dark:text-card-paragraph-dark">
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
          <li><hr className="bg-list-bullet-light dark:bg-list-bullet-dark inline-block border-0 py-0.5 rounded w-4 align-middle me-2"></hr> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Euchue</li>
        </ul>
      </div>
    </div>
  );
}