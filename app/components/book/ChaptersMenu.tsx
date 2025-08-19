import React from 'react'

export default function ChaptersMenu({ onSelect }: { onSelect: (id: number) => void }) {
  return (
    <div className="chapters-menu">
      <h2>✨ Capítulos Encantados</h2>
      <p>Cada página contiene un pedacito de mi alma para vos...</p>
      <div className="chapter-buttons">
        <button className="chapter-btn" onClick={() => onSelect(10)}>✨ Capítulo 10 - Hueles a promesa cumplida de otra vida</button>
        <button className="chapter-btn" onClick={() => onSelect(11)}>💖 Capítulo 11 - Espinas y Corazón</button>
        <button className="chapter-btn" onClick={() => onSelect(12)}>🌹 Capítulo 12 - voy a seguir conquistándote como el primer día</button>
        <button className="chapter-btn" onClick={() => onSelect(13)}>🏠 Capítulo 13 - Quiero una vida con vos</button>
        <button className="chapter-btn" onClick={() => onSelect(14)}>💕 Capítulo 14 - Te amo como el primer día, y un poco más</button>
      </div>
    </div>
  )
}