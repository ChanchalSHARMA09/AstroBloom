import Astronaut from "./Astronaut";

export default function Hero() {
  return (
    <section className="relative z-10">
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          items-center
          justify-center
          gap-16
          px-6

          lg:flex-row
        "
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <div
            className="
              mb-8

              inline-flex

              rounded-full

              border border-white/10

              bg-white/5

              px-5
              py-2

              text-sm
              text-slate-300

              backdrop-blur-xl
            "
          >
            ✨ Welcome to AstroBloom
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-4xl

              text-5xl
              font-bold

              leading-tight

              md:text-7xl
            "
          >
            Explore the Universe
            <br />

            <span
              className="
                bg-linear-to-r
                from-purple-400
                via-pink-400
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              One Star at a Time
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-8

              max-w-xl

              text-lg
              leading-relaxed

              text-slate-400
            "
          >
            A cute futuristic space experience built with
            modern design, smooth animations and delightful
            interactions.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-10

              flex
              flex-wrap
              gap-4

              justify-center
              lg:justify-start
            "
          >
            <button
              className="
                rounded-full

                bg-linear-to-r
                from-purple-500
                to-pink-500

                px-8
                py-4

                font-medium

                shadow-lg
                shadow-purple-500/20

                transition-all
                duration-300

                hover:scale-105
              "
            >
              Launch Mission
            </button>

            <button
              className="
                rounded-full

                border border-white/10

                bg-white/5

                px-8
                py-4

                font-medium

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white/10
              "
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Side - Astronaut */}
        <div className="flex flex-1 justify-center">
          <Astronaut />
        </div>
      </div>
    </section>
  );
}