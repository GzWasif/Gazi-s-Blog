import React from "react";
import Link from "next/link";
import { Switch } from "antd";
import { FaGithub } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";

export default function Navbar({ isDarkModeOn, setIsDarkModeOn }) {
  return (
    <nav className="bg-white dark:bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between items-center flex-col sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="text-black dark:text-white no-underline">
            Gazi Wasif Akram
          </Link>
        </h1>

        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl ">
          <Link
            className="dark:text-white text-black"
            href="https://github.com/GzWasif"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            className="dark:text-white text-black"
            href="https://gaziwasifakram.netlify.app/"
            target="_blank"
          >
            <BsBrowserChrome />
          </Link>
        </div>

        <div className="flex gap-2 items-center">
          <p className="text-sm font-medium text-black dark:text-white">
            Dark Mode
          </p>
          <Switch
            checked={isDarkModeOn}
            onChange={() => setIsDarkModeOn(!isDarkModeOn)}
            className="bg-black"
          />
        </div>
      </div>
    </nav>
  );
}
