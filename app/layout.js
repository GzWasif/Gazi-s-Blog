"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MyProfilePic from "./components/MyProfilePic";

import "./globals.css";
import { Inter } from "next/font/google";

//can't use mmetadata in client side rendered page
// export const metadata = {
//   title: "Gazi's Blog",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    document.title = "Gazi's Blog";
  }, []);

  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  return (
    <html lang="en" className={isDarkModeOn ? "dark" : ""}>
      <body className={`${inter.className} dark:bg-slate-800 `}>
        <Navbar isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <MyProfilePic />

        {children}
      </body>
    </html>
  );
}
