import icTrophy01 from "@/assets/ic-trophy-01.svg";
import icTrophy02 from "@/assets/ic-trophy-02.svg";
import icTrophy03 from "@/assets/ic-trophy-03.svg";

export default function Winners() {
  const topWinners = [
    {
      icon: icTrophy01,
      rank: "1",
      month: "JANUARY 1st WINNER",
      name: "JOHN SMITH",
      id: "5678987654",
      gain: "16344%",
      prize: "$1000",
    },
    {
      icon: icTrophy02,
      rank: "2",
      month: "JANUARY 2nd WINNER",
      name: "JOHN SMITH",
      id: "5678987654",
      gain: "16344%",
      prize: "$1000",
    },
    {
      icon: icTrophy03,
      rank: "3",
      month: "JANUARY 3rd WINNER",
      name: "JOHN SMITH",
      id: "5678987654",
      gain: "16344%",
      prize: "$1000",
    },
  ];

  const tableData = [
    { name: "John Smith", gain: "1624.19%" },
    { name: "John Smith", gain: "1083.63%" },
    { name: "John Smith", gain: "635.47%" },
    { name: "John Smith", gain: "169.20%" },
    { name: "John Smith", gain: "158.62%" },
    { name: "John Smith", gain: "124.50%" },
    { name: "John Smith", gain: "71.47%" },
    { name: "John Smith", gain: "67.05%" },
    { name: "John Smith", gain: "62.30%" },
    { name: "John Smith", gain: "61.74%" },
  ];

  return (
    <section className="py-20 px-4 bg-[#f2f2f2] font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sofia font-normal uppercase text-black mb-16 tracking-wide text-center">
          Sed Fringilla Mauris Sit
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            {topWinners.map((winner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center relative shadow-sm overflow-hidden min-h-[140px]"
              >
                <div className="absolute top-0 right-0 bg-[#c69c6d] text-white font-bold px-8 py-1 rotate-45 translate-x-8 translate-y-4 shadow-md text-sm">
                  {winner.prize}
                </div>

                <div className="w-20 h-20 mr-6 flex-shrink-0">
                  <img
                    src={winner.icon}
                    alt={`Rank ${winner.rank}`}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <span className="text-[#c69c6d] font-bold text-sm uppercase mb-1">
                    {winner.month}
                  </span>
                  <span className="text-gray-800 font-bold text-lg">
                    {winner.name}
                  </span>
                  <span className="text-gray-400 text-xs mb-2">
                    {winner.id}
                  </span>
                  <span className="text-black font-extrabold text-sm">
                    TOTAL GAIN OF{" "}
                    <span className="text-[#bf1e2e]">{winner.gain}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase mb-6 text-black">
              Aliquam Lorem Ant
            </h3>

            <div className="bg-transparent">
              <div className="flex justify-between border-b border-gray-300 pb-2 mb-2">
                <span className="text-[#bf1e2e] font-bold text-sm uppercase">
                  Name
                </span>
                <span className="text-[#bf1e2e] font-bold text-sm uppercase">
                  Gain
                </span>
              </div>

              <div className="space-y-4">
                {tableData.map((row, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-gray-600 text-sm font-medium">
                      {row.name}
                    </span>
                    <span className="text-black font-bold text-sm">
                      {row.gain}
                    </span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-gray-400 mt-4 italic">
                Nam quam nunc, blandit vel, luctus pulvinar
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
          <button className="px-20 bg-[#1a9d55] hover:bg-[#158045] text-white font-bold py-3 rounded transition-colors uppercase text-sm mb-4">
            Join Now
          </button>
          <p className="text-[10px] text-gray-400">
            Terms and Conditions apply
          </p>
        </div>
      </div>
    </section>
  );
}
