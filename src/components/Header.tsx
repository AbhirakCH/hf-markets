import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header className="bg-[#1a1a1a] text-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center pt-2">
          <div className="text-xs text-gray-400 hidden md:block">
            Member of HF Markets Group
          </div>
          <div className="flex items-center">
            <button className="cursor-pointer hidden md:flex items-center gap-2 px-4 py-2 mr-6 border border-gray-500 rounded-lg hover:border-gray-400 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Download App</span>
            </button>

            <div className="hidden lg:flex items-center gap-4 mr-3">
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

            <button className="cursor-pointer hidden lg:block w-6 h-4 hover:opacity-80 transition-opacity">
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

        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <img src={logo} alt="HF Markets" className="h-12" />
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="hover:text-white transition-colors">
                Markets
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Trading
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Investing
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Tools & Education
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Company
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="cursor-pointer px-6 py-2 border-1 border-red-600 bg-[#1a1a1a] text-white rounded hover:bg-red-600/10 transition-colors text-sm font-medium">
              Login
            </button>

            <button className="cursor-pointer px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium">
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
