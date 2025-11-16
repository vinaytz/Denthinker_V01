export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-orange-950 text-white py-20 px-6 paper-texture overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-5 text-amber-100">Our Mission</h3>
            <p className="font-inter text-amber-50/90 text-sm leading-[1.7]">
              To uplift underprivileged children through education, healthcare, and
              community support, creating a brighter future for all.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold mb-5 text-amber-100">Quick Links</h3>
            <ul className="space-y-3 font-inter text-sm">
              <li>
                <a href="#about" className="text-amber-50/90 hover:text-amber-200 transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#initiatives" className="text-amber-50/90 hover:text-amber-200 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Our Initiatives
                </a>
              </li>
              <li>
                <a href="#stories" className="text-amber-50/90 hover:text-amber-200 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-50/90 hover:text-amber-200 transition-colors duration-300 hover:translate-x-1 inline-block">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold mb-5 text-amber-100">Connect</h3>
            <p className="font-inter text-amber-50/90 text-sm mb-6 leading-relaxed">
              Punjab, India
              <br />
              contact@denthinkers.org
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-amber-100/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-100/25 transition-all duration-300 border border-amber-400/20 hover:border-amber-400/40 hover:scale-110 golden-highlight"
                aria-label="Facebook"
              >
                <span className="text-amber-100 font-semibold">f</span>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-amber-100/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-100/25 transition-all duration-300 border border-amber-400/20 hover:border-amber-400/40 hover:scale-110 golden-highlight"
                aria-label="Twitter"
              >
                <span className="text-amber-100 font-semibold">t</span>
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-amber-100/15 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-amber-100/25 transition-all duration-300 border border-amber-400/20 hover:border-amber-400/40 hover:scale-110 golden-highlight"
                aria-label="Instagram"
              >
                <span className="text-amber-100 font-semibold">i</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-600/30 pt-10 text-center">
          <p className="font-crimson text-2xl italic text-amber-100 mb-3">
            Made with love — for every child who dares to dream.
          </p>
          <p className="font-inter text-xs text-amber-200/70 tracking-wide">
            © 2025 DenThinkers Foundation. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-400/5 rounded-full blur-3xl pointer-events-none" />
    </footer>
  );
}
