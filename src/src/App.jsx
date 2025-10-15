import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-400 flex items-center justify-center text-white font-semibold">
              JU
            </div>
            <div>
              <h1 className="font-bold">JUDELENE</h1>
              <p className="text-xs text-gray-600">
                Tech, Construction & Farm Solutions
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#books">Books</a>
            <a href="#portfolio">Portfolio</a>
            <a
              href="#contact"
              className="px-3 py-1 rounded-md bg-teal-500 text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-teal-600 font-medium">Welcome to</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            JUDELENE — Tech, Construction & Farm Solutions
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl">
            I am Olalere Olasunkanmi Jude — software engineer, web & app
            developer, construction consultant, and pig farmer. I build modern
            digital products and practical businesses that serve communities and
            clients.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-block px-5 py-2 rounded-md bg-teal-600 text-white font-medium"
            >
              Hire Me
            </a>
            <a
              href="#portfolio"
              className="inline-block px-5 py-2 rounded-md border border-gray-300"
            >
              View Projects
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            <p>
              <strong>FUTA Graduate</strong> — 2014
            </p>
            <p className="mt-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/2348055064617"
                className="text-teal-600"
              >
                08055064617
              </a>
            </p>
            <p>
              Twitter:{" "}
              <a
                href="https://twitter.com/sunkanmijude"
                className="text-teal-600"
              >
                @sunkanmijude
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
            <div className="flex gap-4 items-center">
              <div className="w-20 h-20 rounded-lg bg-gray-100 flex items-center justify-center">
                <svg
                  width="56"
                  height="56"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" rx="6" fill="#E6F6F1" />
                  <path
                    d="M12 12a3 3 0 100-6 3 3 0 000 6z"
                    fill="#10B981"
                  />
                  <path
                    d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6"
                    stroke="#059669"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Full-Stack Developer</h3>
                <p className="text-sm text-gray-500">
                  React · Node · Tailwind · Vite
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700">
          I am Olalere Olasunkanmi Jude, a graduate of the Federal University of
          Technology Akure (FUTA) — Class of 2014. I build modern web and mobile
          applications, and apply software engineering principles to building
          construction, surveying, and pig farming.
        </p>
      </section>

      {/* Contact */}
      <footer id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p>Email: olaleresunkanmi@gmail.com</p>
        <p>WhatsApp: 08055064617</p>
        <p>Twitter: @sunkanmijude</p>
        <p>Facebook: Olalere Sunkanmi Jude</p>
        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} JUDELENE — Built with ❤️
        </p>
      </footer>
    </div>
  );
                }
