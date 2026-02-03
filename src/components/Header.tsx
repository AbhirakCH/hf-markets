import { useState } from "react";
import logo from "@/assets/logo.svg";

const navigation = [
  { name: "Markets", href: "#" },
  { name: "Trading", href: "#" },
  { name: "Investing", href: "#" },
  { name: "Tools & Education", href: "#" },
  { name: "Company", href: "#" },
];

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#1a1a1a] text-gray-300 relative">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-2 pb-2">
          <div className="text-xs text-gray-400 hidden md:block">
            Member of HF Markets Group
          </div>
          <div className="flex items-center">
            <button className="cursor-pointer hidden md:flex items-center gap-2 px-4 py-2 mr-6 border border-gray-500 rounded-lg hover:border-gray-400 transition-colors">
              <svg
                width="10"
                height="19"
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11354_4)">
                  <path
                    d="M8.46 0H1.24C0.56 0 0 0.56 0 1.24V17.23C0 17.91 0.56 18.47 1.24 18.47H8.46C9.14 18.47 9.7 17.91 9.7 17.23V1.24C9.7 0.56 9.14 0 8.46 0ZM4.85 0.63C5.06 0.63 5.22 0.8 5.22 1C5.22 1.2 5.05 1.37 4.85 1.37C4.65 1.37 4.48 1.2 4.48 1C4.48 0.8 4.65 0.63 4.85 0.63ZM6.99 17.53H2.71V16.86H6.99V17.53ZM8.87 15.92H0.83V2.01H8.87V15.92Z"
                    fill="#A9A9A9"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11354_4">
                    <rect width="9.7" height="18.47" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span className="text-sm">Download App</span>
            </button>

            <div className="hidden md:flex items-center gap-4 mr-3">
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Contact us
              </a>
              <div className="h-4 w-px bg-gray-600"></div>
              <a
                href="#"
                className="hover:text-white transition-colors text-sm"
              >
                Partner with us
              </a>
              <div className="h-4 w-px bg-gray-600"></div>
            </div>

            <button className="cursor-pointer hidden md:block w-6 h-4 hover:opacity-80 transition-opacity">
              <svg
                className="w-full h-full"
                viewBox="0 0 60 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="60" height="30" fill="#012169" />
                <path d="M0 0L60 30M60 0L0 30" stroke="white" strokeWidth="3" />
                <path
                  d="M0 0L60 30M60 0L0 30"
                  stroke="#C8102E"
                  strokeWidth="2"
                />
                <path d="M30 0V30M0 15H60" stroke="white" strokeWidth="5" />
                <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main navigation bar */}
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-blue-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo and desktop navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img src={logo} alt="HF Markets" className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:block absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Mobile: Show Login/Register buttons */}
              <button className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-red-600 bg-[#1a1a1a] text-white rounded hover:bg-red-600/10 transition-colors text-xs sm:text-sm font-medium">
                Login
              </button>
              <button className="px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 border-t border-gray-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile: Additional links */}
            <div className="pt-4 border-t border-gray-700 space-y-2">
              <button className="ml-2 flex items-center gap-2 px-3 py-2 border border-gray-500 rounded-lg hover:border-gray-400 transition-colors text-sm text-left">
                <svg
                  width="10"
                  height="19"
                  viewBox="0 0 10 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11354_4)">
                    <path
                      d="M8.46 0H1.24C0.56 0 0 0.56 0 1.24V17.23C0 17.91 0.56 18.47 1.24 18.47H8.46C9.14 18.47 9.7 17.91 9.7 17.23V1.24C9.7 0.56 9.14 0 8.46 0ZM4.85 0.63C5.06 0.63 5.22 0.8 5.22 1C5.22 1.2 5.05 1.37 4.85 1.37C4.65 1.37 4.48 1.2 4.48 1C4.48 0.8 4.65 0.63 4.85 0.63ZM6.99 17.53H2.71V16.86H6.99V17.53ZM8.87 15.92H0.83V2.01H8.87V15.92Z"
                      fill="#A9A9A9"
                    />
                  </g>
                </svg>
                <span>Download App</span>
              </button>
              <a
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-white text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner with us
              </a>

              <button className="ml-4 cursor-pointer w-6 h-4 hover:opacity-80 transition-opacity">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 60 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="60" height="30" fill="#012169" />
                  <path
                    d="M0 0L60 30M60 0L0 30"
                    stroke="white"
                    strokeWidth="3"
                  />
                  <path
                    d="M0 0L60 30M60 0L0 30"
                    stroke="#C8102E"
                    strokeWidth="2"
                  />
                  <path d="M30 0V30M0 15H60" stroke="white" strokeWidth="5" />
                  <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="3" />
                </svg>
              </button>
              <div className="flex gap-2 border-t border-gray-700 pt-4 pb-3 item-center justify-center">
                <button className="block px-4 py-2 sm:px-6 sm:py-2 border-2 border-red-600 bg-[#1a1a1a] text-white rounded hover:bg-red-600/10 transition-colors text-xs sm:text-sm font-medium">
                  Login
                </button>
                <button className="block px-4 py-2 sm:px-6 sm:py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
