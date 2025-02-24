import React from "react";

export default function UserPersona() {
  return (
        <div className="col-span-1 md:col-span-1 lg:col-span-4 items-center bg-card-bg-person-light dark:bg-primary-dark px-4 pt-7 rounded-lg">
          <img
            src="/assets/user-persona.png"
            alt="User Persona"
            className="rounded-lg object-cover w-full h-auto mb-3"
          />

          <div className="">
            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="font-semibold text-card-h2-light dark:text-card-h2-dark">
                  NAME:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark"> 35</p>
              </div>
            </div>

            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="text-left font-semibold text-card-h2-light dark:text-card-h2-dark">
                  AGE:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark"> Married, 2 Kids</p>
              </div>
            </div>

            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="text-left font-semibold text-card-h2-light dark:text-card-h2-dark">
                  EDUCATION:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark">Calgary,Alberta</p>
              </div>
            </div>

            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="text-left font-semibold text-card-h2-light dark:text-card-h2-dark">
                  JOB:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark"> University of Calgary </p>
              </div>
            </div>

            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="text-left font-semibold text-card-h2-light dark:text-card-h2-dark">
                  LOCATION:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark"> Family Physician</p>
              </div>
            </div>

            <div className="flex justify-between py-1.5">
              <div className="w-1/2">
                <h3 className="text-left font-semibold text-card-h2-light dark:text-card-h2-dark">
                  HOBBIES:
                </h3>
              </div>
              <div className="w-1/2">
                <p className="text-card-paragraph-light dark:text-card-paragraph-dark"> Hiking and dancing</p>
              </div>
            </div>

          </div>
        </div>
    
  );
}