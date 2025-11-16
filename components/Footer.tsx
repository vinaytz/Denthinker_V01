export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-amber-900 to-orange-950 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Our Mission</h3>
            <p className="font-poppins text-amber-100 text-sm leading-relaxed">
              To uplift underprivileged children through education, healthcare, and
              community support, creating a brighter future for all.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-poppins text-sm">
              <li>
                <a href="#about" className="text-amber-100 hover:text-amber-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#initiatives" className="text-amber-100 hover:text-amber-300 transition-colors">
                  Our Initiatives
                </a>
              </li>
              <li>
                <a href="#stories" className="text-amber-100 hover:text-amber-300 transition-colors">
                  Impact Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-amber-100 hover:text-amber-300 transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Connect</h3>
            <p className="font-poppins text-amber-100 text-sm mb-4">
              Punjab, India
              <br />
              contact@denthinkers.org
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-amber-100/20 rounded-full flex items-center justify-center hover:bg-amber-100/30 transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-100/20 rounded-full flex items-center justify-center hover:bg-amber-100/30 transition-colors"
                aria-label="Twitter"
              >
                t
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-amber-100/20 rounded-full flex items-center justify-center hover:bg-amber-100/30 transition-colors"
                aria-label="Instagram"
              >
                i
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 pt-8 text-center">
          <p className="font-dancing text-xl text-amber-200 mb-2">
            Made with love — for every child who dares to dream.
          </p>
          <p className="font-poppins text-xs text-amber-300">
            © 2025 DenThinkers Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
