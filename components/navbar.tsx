// @flow strict
import Link from "next/link";
import GlowCard from "./helper/glow-card";

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/#about",
    label: "About",
  },
  {
    path: "/#experience",
    label: "Experience",
  },
  {
    path: "/#skills",
    label: "Skills",
  },
  {
    path: "/#education",
    label: "Education",
  },
  {
    path: "/#blogs",
    label: "Blog",
  },
  {
    path: "/#projects",
    label: "Projects",
  },
  {
    path: "/#contact",
    label: "Contact",
  }
]

function Navbar() {
  return (
          <nav className="border rounded-lg border-[#2a2e5a] transition-all duration-300 hover:border-transparent">
              <div className="flex items-center justify-between py-5">
                  <div className="flex flex-shrink-0 items-center">
                      <Link
                          href="/"
                          className=" text-[#16f2b3] text-3xl font-bold ml-2 uppercase">
                          Masum Billah
                      </Link>
                  </div>

                  <ul
                      className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
                      id="navbar-default">
                      {routes.map((route) => (
                          <li key={route.label}>
                              <Link
                                  className="block px-4 py-2 no-underline outline-none hover:no-underline"
                                  href={route.path}>
                                  <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 font-semibold">
                                      {route.label}
                                  </div>
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </nav>
  );
};

export default Navbar;