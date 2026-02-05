import imgMobile from "@/assets/img-mobile.webp";
import icAccount from "@/assets/ic-account.svg";
import icMoney from "@/assets/ic-money.svg";
import icTrading from "@/assets/ic-trading.svg";

export default function Features() {
  return (
    <section className="lg:pt-20 lg:pb-0 pt-10 pb-10 px-4 bg-[#f2f2f2] font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-sofia font-normal uppercase text-black mb-16 tracking-wide">
          Quisque Rutrum
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5 relative">
          <div className="flex flex-col gap-12 lg:w-1/4 items-center lg:items-end text-center lg:text-left">
            <div className="flex flex-col w-[50%] items-center lg:items-start max-w-xs">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img src={icAccount} alt="Account" className="w-full h-full" />
              </div>
              <p className="text-[#555] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>

            <div className="flex flex-col w-[50%] items-center lg:items-start max-w-xs mt-12 lg:mt-24">
              <div className=" h-16 mb-4 flex items-center justify-center">
                <img
                  src={icMoney}
                  alt="Money"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#555] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>
          </div>

          <div className="lg:w-2/4 flex justify-center z-0">
            <img
              src={imgMobile}
              alt="Trading App Mobile"
              className="w-full max-w-[300px] md:max-w-[350px] lg:max-w-none drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-12 lg:w-1/4 items-center lg:items-start text-center lg:text-left">
            <div className="flex flex-col w-[50%] items-center lg:items-start max-w-xs">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={icTrading}
                  alt="Trading"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#555] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>

            <div className="flex flex-col w-[50%] items-center lg:items-start max-w-xs mt-12 lg:mt-24">
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={icAccount}
                  alt="User"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[#555] text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
