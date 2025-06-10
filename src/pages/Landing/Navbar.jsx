import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <div className="#">
          <img
                            src="/logos/logo-traininghub.svg"
                            alt="Logo Traininghub"
                            className="w-48 h-auto object-contain"
                            loading="lazy"
                        />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href="https://evolutionui.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-slate-950 px-5 py-2 text-slate-950 text-sm font-medium hover:bg-slate-950 hover:text-white transition-colors cursor-pointer"
          >
            Iniciar Sesión
          </a>
        </div>
      </nav>
      ``
    </header>
  );
};

export default Navbar;
