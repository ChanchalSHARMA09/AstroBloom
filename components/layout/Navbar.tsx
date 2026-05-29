export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <nav
        className="
          mx-auto
          flex
          max-w-5xl
          items-center
          justify-between

          rounded-full

          border border-white/10

          bg-white/5

          px-8
          py-5

          backdrop-blur-2xl

          shadow-[0_0_30px_rgba(139,92,246,0.15)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-2xl">🚀</span>

          <span className="text-lg font-semibold tracking-wide">
            AstroBloom
          </span>
        </div>

        {/* Links */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            Stats
          </a>

          <a
            href="#"
            className="text-slate-300 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <button
          className="
            rounded-full

            bg-linear-to-r
            from-purple-500
            to-pink-500

            px-6
            py-3

            text-sm
            font-medium

            transition-all
            duration-300

            hover:scale-105
          "
        >
          Launch Mission
        </button>
      </nav>
    </header>
  );
}