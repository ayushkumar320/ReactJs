import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/4861335/pexels-photo-4861335.jpeg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Hello, You can call me Ayush, here is my short story
            </h2>
            <p className="mt-6 text-gray-600">
              I'm Ayush, a passionate and committed full-stack web developer in the making. I've completed foundational computer science courses like Harvard CS50 and explored core programming with C++ under Abdul Bari. Currently, I'm diving deep into the MERN stack—mastering MongoDB, Express, React, and Node.js—to build robust, scalable web applications. From building dynamic UI components in React to implementing real-world features using advanced MongoDB aggregation, my journey has been all about turning concepts into hands-on projects. I'm continuously sharpening my skills, exploring modern development tools, and aiming to create seamless, user-centric digital experiences.
            </p>
            <p className="mt-4 text-gray-600">
              My future goals: To contribute to open-source projects, collaborate with other developers, and continuously learn and adapt to new technologies in the ever-evolving field of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}