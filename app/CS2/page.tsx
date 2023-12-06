"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Link from 'next/link'
import Logo from "../../public/logos/logo_full_transparent.png";
import Youtube from "../../public/images/youtube.png";
import Twitch from "../../public/logos/twitch.png";
import Steam from "../../public/images/steam.png";

// CS2 component
const CS2 = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-700">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className="m-auto">
          <Nav></Nav>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      </div>

      <div className="flex justify-center items-center h-full">
        <main className="flex-grow pb-16" style={{ 
          paddingInline: '21rem', 
          textAlign: 'center', 
          position: 'relative', 
          backgroundImage: 'url(/images/CounterStrike2.jpg)',
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' }}>

          {/* Watch Section */}
          <div className="stream-section" style={{padding: "2rem"}}>
            <h1 style={{position: "relative",fontSize:"3rem",textDecoration:"underline" }}>Watch</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="https://www.twitch.tv/directory/category/counter-strike" target="_blank" rel="noopener noreferrer">
                <Image
                  className='rounded-lg'
                  src={Twitch}
                  alt=""
                  width={350}
                  height={350}
                />
              </Link>
            </div>
          </div>

          {/* Play Section */}
          <div className="play" style={{padding: "2rem"}}>
            <h1 style={{position: "relative",fontSize:"3rem",textDecoration:"underline" }}>Play</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="https://store.steampowered.com/app/730/CounterStrike_2/" target="_blank" rel="noopener noreferrer">
                <Image
                  className='rounded-lg mt-10'
                  src={Steam}
                  alt=""
                  width={250}
                  height={250}
                />
              </Link>
            </div>
          </div>

          {/* Code Section */}
          <div className="code-section" style={{padding: "5rem"}}>
            <h1 style={{position: "relative",top: "2rem",fontSize:"3rem",textDecoration:"underline" }}>Code Base</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Link href="https://www.youtube.com/watch?v=g7yv5VOsM5A" target="_blank" rel="noopener noreferrer">
                <Image
                  className='rounded-lg'
                  src={Youtube}
                  alt=""
                  width={200}
                  height={200}
                />
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Footer section */}
      <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900">
      <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            {/* Logo */}
            <Image
              src={Logo}
              alt="Flowbite Logo"
              width={100}
              height={100}
              style={{ margin: "-20px" }}
            />
            {/* Navigation links */}
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Mission Statement
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Horizontal line */}
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          {/* Copyright information */}
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com" className="hover:underline">
              Gaming Portal™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default CS2;
