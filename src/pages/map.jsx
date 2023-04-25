import logoTinybox from '@/images/logos/tb_Logo-Logotype.svg';
import mapstyle from '@/styles/map_style.json';
import React, { useEffect } from 'react';
import * as mapboxgl from 'mapbox-gl';
import Image from 'next/image';
import Profile from '@/images/btn_Profile.svg';
import Link from 'next/link'

const Home = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pbWF0dGVyIiwiYSI6ImNsZmJ6N3BpMDAxOHUzenJydTdzY2ptNHQifQ.TZQI-y5BFaAglqV0zVKyxw'; 
    const map = new mapboxgl.Map({
      container: 'map',
      center: [144.7631, -37.9536], // Initial focus coordinate
      zoom: 10,
      style: 'mapbox://styles/mapbox/streets-v11', // 'src\styles\map_style.json' {mapstyle}
    });

    // Add Mapbox GL JS controls
    map.addControl(new mapboxgl.NavigationControl());
  }, []);
  
return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Navigation Bar */}
      <div className="p-4 h-screen bg-white flex flex-col min-w-[400px] rounded-2xl">
        {/* Logo */}
        <div className="flex justify-between items-center">
          <div className="flex-none">
            <Image className="py-4" src={logoTinybox} alt="tinybox" height={40}/>
          </div>
          <Link type="button" href="#">
            <Image src={Profile} alt="tinybox" height={45}/>
          </Link>
        </div>
<div class="mb-3">
  <div class="relative mt-4 mb-4 flex w-full flex-wrap items-stretch">
    <input
      type="search"
      class="relative flex-auto rounded-l border border-solid bg-transparent bg-clip-padding px-3 py-[0.25rem] outline-none transition duration-200 ease-in-out focus:z-[3] dark:border-neutral-300 dark:text-neutral-200 dark:placeholder:text-neutral-200"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon1"/>
    <button
      class="w-14 relative z-[2] flex items-center rounded-r bg-[#00AA95] hover:bg-[#00FFDA] px-4 text-xs font-medium leading-tight text-white transition duration-150 ease-in-out hover:bg-primary-700 active:bg-primary-800"
      type="button"
      id="button-addon1"
      data-te-ripple-init
      data-te-ripple-color="light">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>

<div class="w-full">
  <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select a tab</label>
    <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
      <option>Environmental</option>
      <option>Liveability</option>
      <option>Safety</option>
    </select>
  </div>
  <div class="hidden sm:block">
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex" aria-label="Tabs">
        <Link href="#" class="border-[#00AA95] text-[#00AA95] w-1/3 border-b-2 pb-4 px-1 text-center text-sm font-medium">
        Environmental
        </Link>
        <Link href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/3 border-b-2 pb-4 px-1 text-center text-sm font-medium">
        Liveability
        </Link>
        <Link href="#" class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 w-1/3 border-b-2 pb-4 px-1 text-center text-sm font-medium">
        Safety
        </Link>
      </nav>
    </div>
  </div>
  <div class="mt-4">
    {/* <!-- Tab 1 content --> */}
    <div class="flex flex-col items-start pt-5">
      <div class="flex justify-between w-full items-center">
        <p class="text-black font-bold">Input Overlay</p>
        <div class="flex items-center">
          <button type="button" class="bg-[#00AA95] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" aria-checked="false">
            <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
    <p class="text-black pb-5">Description for input overlay.</p>
    <div class="flex flex-col items-start pt-5">
      <div class="flex justify-between w-full items-center">
        <p class="text-black font-bold">Input Overlay</p>
        <div class="flex items-center">
          <button type="button" class="bg-[#00AA95] relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out" role="switch" aria-checked="false">
            <span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
          </button>
        </div>
      </div>
    </div>
    <p class="text-black pb-5">Description for input overlay.</p>
    {/* <!-- Add Tab 2 and Tab 3 content as needed --> */}
  </div>
</div>


</div>
      {/* Main Content */}
      <div className="flex-grow">
        {/* Full-screen Map */}
        <div id="map" className="h-screen overflow-hidden"></div>
      </div>
    </div>
  );
};
export default Home;
