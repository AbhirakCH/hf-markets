import {
  Facebook,
  Twitter,
  Send,
  Instagram,
  Youtube,
  Linkedin,
  FileText,
} from "lucide-react";
import appStore from "@/assets/appstore-app.svg";
import googlePlay from "@/assets/googleplay-app.svg";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-10 font-sans">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section: Socials & Download */}
        <div className="flex flex-col gap-8 lg:w-1/4">
          {/* Find us on */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-200">Find us on</h3>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FileText size={20} />
              </a>
            </div>
          </div>

          {/* Download HFM App */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-gray-200">
              Download HFM App
            </h3>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={appStore}
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img
                  src={googlePlay}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section: Risk Warning */}
        <div className="flex flex-col gap-4 lg:w-3/4">
          <h3 className="text-sm font-bold text-gray-200">Risk Warning</h3>
          <p className="text-xs text-gray-400 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem
            ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
            consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
            nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
            venenatis vitae, justo. Nullam dictum felis eu p
          </p>
        </div>
      </div>
    </footer>
  );
}
