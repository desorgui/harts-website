import Image from 'next/image';
import { useState } from 'react';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const [current, setCurrent] = useState(1);

  const [navLinks, setNavLinks] = useState([
    {
      id: 1,
      name: 'Home',
      url: '#home',
    },
    {
      id: 2,
      name: 'About',
      url: '#about',
    },
    {
      id: 3,
      name: 'Services',
      url: '#services',
    },
    {
      id: 4,
      name: 'Pricing',
      url: '#pricing',
    },
    {
      id: 5,
      name: 'Contact',
      url: '#contact',
    },
  ]);

  return (
    <div>
      <nav class="bg-[#222222] border-gray-200 px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
            <Image src="/./hartslogo.png" class="h-6 mr-3 sm:h-9" alt="Hart's Logo" width="100" height="100" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" onClick={() => setIsOpen(!isOpen)} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div class={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#222222] md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setCurrent(link.id)}>
                  <a href={link.url} class={`block py-2 pl-3 pr-4 text-white ${current === link.id ? "bg-[#B88222]": ""} rounded md:bg-transparent`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}