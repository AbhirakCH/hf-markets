import icMedal01 from "@/assets/ic-medal-01.svg";
import icMedal02 from "@/assets/ic-medal-02.svg";
import icMedal03 from "@/assets/ic-medal-03.svg";

export default function Prizes() {
  const prizes = [
    {
      icon: icMedal01,
      amount: "$1000",
      description: "CRAS DAPIBUS & CRAS DAPIBUS",
    },
    {
      icon: icMedal02,
      amount: "$1000",
      description: "CRAS DAPIBUS",
    },
    {
      icon: icMedal03,
      amount: "$1000",
      description: "CRAS DAPIBUS",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-sofia font-normal uppercase text-black mb-16 tracking-wide">
          Prizes
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-[#f2f2f2] rounded-[20px] p-10 flex flex-col items-center justify-center min-h-[300px]"
            >
              <div className="w-24 h-24 mb-6 relative">
                <img
                  src={prize.icon}
                  alt={`Prize ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-4xl font-extrabold text-black mb-4">
                {prize.amount}
              </div>
              <div className="text-sm text-[#555] font-medium uppercase tracking-wide max-w-[150px] leading-relaxed">
                {prize.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center">
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
