"use client"
import React from 'react';
import Nav from '@/components/nav/nav';
import Image from "next/image";
import Logo from "../../public/logos/logo_full_transparent.png";
import kev from"../../public/images/kev.png";
import mar from"../../public/images/mar.png";
import dan from"../../public/images/dan.png";
import dem from"../../public/images/dem.png";

const MeetTheTeamPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-screen text-white p-6 text-center bg-slate-900">
        <div className=" m-auto">
          <Nav></Nav>
          <h1>Welcome to the Team Page</h1>
          <p>This is the Team page content.</p>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <main className="flex-grow pb-16 text-black bg-slate-900" style={{ textAlign:"center" }}>
      <div className="row">
        {/* Member 1 */}
        <div className="flex flex-col items-center mt-10 text-center"id="gfg">
          <div className="card">
            <i className="fa fa-user-circle" style={{ fontSize: '68px' }}></i>
            <div className="container">
              <h2 style={{color:"white"}}>Kevin Estrella</h2>
              <Image style={{justifyContent: 'center' , display: "flex"}}
        className='rounded-lg'
        src={kev}
        alt=""
        width={200}
        height={200}
      />
               <p style={{color:"white"}}>Project Manager</p>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center mt-10 text-center">
          <div className="card">
            <i className="fa fa-user-circle" style={{ fontSize: '68px' }}></i>
            <div className="container">
            <h2 style={{color:"white"}}>Daniel Lai</h2>
              <Image style={{justifyContent: 'center' , display: "flex"}}
        className='rounded-lg'
        src={dan}
        alt=""
        width={200}
        height={200}
      />
               <p style={{color:"white"}}>Scrum Master</p>

            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center mt-10 text-center">
          <div className="card">
            <i className="fa fa-user-circle" style={{ fontSize: '68px' }}></i>
            <div className="container">
            <h2 style={{color:"white"}}>Damariel Causey</h2>
              <Image style={{justifyContent: 'center' , display: "flex"}}
        className='rounded-lg'
        src={dem}
        alt=""
        width={200}
        height={200}
      />
               <p style={{color:"white"}}>Developer I​</p>
            </div>
          </div>
        </div>

        {/* Member 4 */}
        <div className="flex flex-col items-center mt-10 text-center">
          <div className="card">
            <i className="fa fa-user-circle" style={{ fontSize: '68px' }}></i>
            <div className="container">
            <h2 style={{color:"white"}}>Marco Wehrhanhn​</h2>
              <Image style={{justifyContent: 'center' , display: "flex"}}
        className='rounded-lg'
        src={mar}
        alt=""
        width={200}
        height={200}
      />
              <p style={{color:"white"}}>Developer I​I</p>

            </div>
          </div>
        </div>
      </div>
      </main>

      <footer className="bg-slate-900 rounded-lg shadow dark:bg-gray-900">
        <div className="w-full mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Image
              src={Logo}
              alt="Flowbite Logo"
              width={100}
              height={100}
              style={{ margin: "-20px" }}
            />
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
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com" className="hover:underline">Gaming Portal™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default MeetTheTeamPage;
