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
    <div className="chapter-content max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
      <h3 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 leading-snug">
        {title}
      </h3>
      <div className="space-y-4 text-base sm:text-lg text-gray-800 leading-relaxed text-justify">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <button
        className="back-btn mt-6 px-4 py-2 rounded-lg bg-pink-500 text-white text-sm sm:text-base hover:bg-pink-600 transition-all"
        onClick={onBack}
      >
        ← Volver al índice mágico
      </button>
    </div>
  )
}
