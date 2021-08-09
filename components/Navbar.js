/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import "@fortawesome/fontawesome-free";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from 'next/link'

const products = [
  {
    name: "BRACELETS",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
  },
  {
    name: "CHAIN",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
  },
  {
    name: "CHAIN WITH PENDANT",
    description: "Your customers' data will be safe and secure.",
    href: "#",
  },
  {
    name: "KADA",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
  },
  {
    name: "PENDANTS",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
  {
    name: "RUDRAKSHA MALA",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
  {
    name: "COUPLE SET",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
  {
    name: "CHAIN HOOKS",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
  {
    name: "RAKHI",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
  },
];

const items = 8;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
     
   
      <Popover className="relative bg-white ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link href='/'> 
                  <a >
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt=""
                    />
                  </a>
                  </Link>
                </div>

                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Link href='/'>
                  <a
                    
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </a>
                  </Link>
                  <Link href='/uploadProduct'>
                  <a
                    
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Upload Products
                  </a>
                  </Link>
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Products</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-1000 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {products.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Track Order
                  </a>
                  <div className="-m-3 p-3 w-30 flex items-center rounded-md hover:bg-gray-50">
                    <input
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-1 pr-1  sm:text-sm border-gray-300 rounded-md"
                      placeholder="Search for Products"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </Popover.Group>

                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link href='/signin'>
                  <a
                   
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in / Sign up
                  </a>
                  </Link>
                  
                </div>
                <div className="cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>

                  <sup className="superScript">
                    {items > "9" ? "9+" : items}
                  </sup>
                </div>
              </div>
            </div>
            {/* for mobile device */}
            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-100 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-lg ring-1  ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                          alt="Workflow"
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-3">
                        <div className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                          <input
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 pr-5 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Search for Products"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                          </svg>
                        </div>
                        {products.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </a>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5 space-y-6">
                    <div>
                    <Popover.Button >
                      <Link href="/signup">
                      <a
                        
                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Sign up
                      </a>
                      </Link>
                      </Popover.Button >
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <Popover.Button >
                        <Link href='/signin'>
                        <a
                          
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </a>
                        </Link>
                        </Popover.Button>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
}
