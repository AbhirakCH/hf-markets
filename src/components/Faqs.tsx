import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Question A",
      answer: "Answer A",
    },
    {
      question: "Question B",
      answer: "Answer B",
    },
    {
      question: "Question C",
      answer: "Answer C",
    },
    {
      question: "Question D",
      answer: "Answer D",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-[#f2f2f2] font-sans">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sofia font-normal uppercase text-black mb-12 tracking-wide text-center">
          FAQs
        </h2>

        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-6 px-4 bg-[#f2f2f2] hover:bg-gray-200 transition-colors text-left focus:outline-none"
              >
                <span className="text-black text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-gray-500 w-6 h-6" />
                ) : (
                  <ChevronDown className="text-gray-500 w-6 h-6" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-6 pt-0 bg-[#f2f2f2] text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
