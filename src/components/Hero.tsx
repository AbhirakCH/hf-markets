import heroBanner from "@/assets/img-hero-banner.webp";

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-[600px] py-12 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Headline */}
        <div className="text-center mb-10 w-full font-sofia font-semibold">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-[#c69c6d] drop-shadow-lg mb-2">
            LOREM IPSUM DOLOR
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-tight text-white drop-shadow-lg">
            SIT AMET TOSIK
          </h2>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-2xl">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Lorem ipsum dolor sit amet
          </h3>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              />
            </div>

            <div>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm text-gray-500">
                <option value="">Country</option>
                {/* Add country options here */}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1">
                <input
                  type="text"
                  placeholder="Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500 text-sm text-gray-500">
                <option value="">Experience</option>
                {/* Add experience options here */}
              </select>
            </div>

            <div className="flex items-start gap-2 mt-4">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="terms" className="text-xs text-gray-500">
                I have read and accepted the{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-red-500 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-20 bg-[#1a9d55] hover:bg-[#158045] text-white font-bold py-3 px-4 rounded transition-colors uppercase text-sm mt-4"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
