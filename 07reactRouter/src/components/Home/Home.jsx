import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black sm:mx-16 mx-2 sm:py-16 bg-white">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Hi, I'm Ayush
              <span className="hidden sm:block text-4xl">
                Aspiring Full-Stack Developer 🚀
              </span>
            </h2>

            <p className="text-lg text-gray-700">
              I'm currently learning the MERN stack and diving deep into full-stack web development.
              Passionate about building modern, scalable, and user-friendly web apps.
            </p>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/projects"
            >
              
              &nbsp; View Projects
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full flex justify-start items-center">
          <img
            className="w-96 object-cover rounded-lg shadow-md"
            src="https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg"
            alt="developer illustration"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-48 rounded-lg shadow"
          src="https://images.pexels.com/photos/2255355/pexels-photo-2255355.jpeg"
          alt="laptop workspace"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Building Web Experiences, One Line at a Time.
      </h1>
    </div>
  );
}
