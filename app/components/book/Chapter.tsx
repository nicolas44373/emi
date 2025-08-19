import React from 'react'

export default function Chapter({
  title,
  paragraphs,
  onBack,
}: {
  title: string
  paragraphs: string[]
  onBack: () => void
}) {
  return (
    <div
      lang="es"
      className="
        min-h-screen
        bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50
        px-4 sm:px-6 lg:px-8 py-8
        antialiased
        [text-rendering:optimizeLegibility]
        [-webkit-text-size-adjust:100%]
      "
    >
      <div
        className="
          mx-auto w-full max-w-[72ch]
          rounded-2xl border border-white/60 bg-white/80 backdrop-blur
          shadow-[0_10px_30px_rgba(244,114,182,0.15)]
          p-5 sm:p-8
        "
      >
        {/* Título: familia Playfair + bold sin conflictos */}
        <h3
          className="
            text-center mb-4 sm:mb-5 leading-snug
            text-3xl sm:text-[2.2rem]
            bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500
            bg-clip-text text-transparent
            [text-wrap:balance]
            [font-family:var(--font-playfair)]
            font-bold
          "
        >
          {title}
        </h3>

        <div className="flex items-center justify-center mb-6">
          <span className="h-px w-12 bg-pink-200/80" />
          <span className="mx-2 inline-block h-2 w-2 rounded-full bg-pink-400/80" />
          <span className="h-px w-12 bg-pink-200/80" />
        </div>

        {/* Texto: serif/Playfair para cuerpo, sin conflictos */}
        <div
          className="
            space-y-5
            text-[1.05rem] sm:text-[1.08rem]
            leading-8 sm:leading-8
            text-gray-800
            text-justify
            hyphens-auto
            break-words
            tracking-[0.002em]
            font-serif
            [font-family:var(--font-playfair)]
          "
        >
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? `
                    relative
                    first-letter:text-pink-600
                    first-letter:text-5xl sm:first-letter:text-6xl
                    first-letter:leading-[0.75]
                    first-letter:mr-2 first-letter:float-left
                    first-letter:[font-family:var(--font-dancing)]
                    first-letter:font-bold
                  `
                  : ''
              }
            >
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="
              group inline-flex items-center gap-2
              px-4 py-2 rounded-xl
              bg-gradient-to-r from-pink-500 to-rose-500
              text-white text-sm sm:text-base
              shadow-md hover:shadow-lg transition-all
              focus:outline-none focus:ring-2 focus:ring-rose-300/70
            "
            onClick={onBack}
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span className="font-medium">Volver al índice mágico</span>
          </button>
        </div>
      </div>
    </div>
  )
}
